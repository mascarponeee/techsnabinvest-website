import { useState, useEffect } from 'react'
import '../styles/modal_request.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineClose  } from "react-icons/ai"

export default function Form(props) {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [formValid, setFormValid] = useState(false)
  const [dataSent, setDataSent] = useState(false)

  useEffect(() => {
    if (nameError || phoneError) {
      setFormValid(false)
    } else 
      setFormValid(true)
  }, [nameError, phoneError])

  const submitForm = async (e) => {

    e.preventDefault();
    const formData = new FormData();

    formData.append('name', e.target.name.value)
    formData.append('phone', e.target.phone.value)
    formData.append('category', e.target.category.value)
    e.target.email.value && formData.append('email', e.target.email.value)
    e.target.comment.value && formData.append('comment', e.target.comment.value)

    const dataForm = Object.fromEntries(formData)
    console.log(dataForm)

    try {
      const response = await fetch('http://localhost:5000/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(dataForm)
      });
  
      if (!response.ok) {
        throw new Error('Ошибка сети');
      }
  
      const data = await response.json();
      console.log(data)
      setDataSent(true)
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    const nameRegex = /^[a-zA-Zа-яА-Я]{2,32}$/
    if (!nameRegex.test(e.target.value))
      setNameError(true)
    else
    setNameError(false)
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value)
    const phoneRegex = /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    if (!phoneRegex.test(e.target.value))
      setPhoneError(true)
    else
    setPhoneError(false)
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true)
        break
      case 'phone':
        setPhoneDirty(true)
        break
      default:
        break
    }
  }

  return (
    <div className="modalContainer" onClick={
      e => e.stopPropagation()
      }>
        { props.isModal && <div className="titleCloseBtn">
        <AiOutlineClose 
          size={"28px"} 
          className='close_btn' 
          onClick={() => {
            props.setOpenModal(false)
          }} 
        />
        </div>}
        {dataSent ?  (
          <div className="sent-inform">
            <IoIosCheckmarkCircleOutline size={80} color='green' style={{
              'marginBottom': '10px'
            }}/>
            <h1>Ваша заявка принята!</h1>
            <p>Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <div>
            <h1 className="modal_title title">Оставить заявку</h1>

            <form onSubmit={submitForm} action="" method='post' className='form-request'>

              <div className={nameDirty && nameError ? "form-group error" : "form-group"}>
                <input 
                  onBlur={blurHandler} 
                  onChange={nameHandler}
                  value={name} 
                  type="text" 
                  name='name'
                  placeholder='Ваше имя*' 
                  required />
                {(nameDirty && nameError) && <p className='text-danger'>Имя должно быть от 2 до 32 букв</p>}
              </div>

              <div className={phoneDirty && phoneError ? "form-group error" : "form-group"}>
                <input 
                  onBlur={blurHandler} 
                  onChange={phoneHandler}
                  value={phone} 
                  type="text" 
                  name='phone' 
                  placeholder='Ваш телефон*' 
                  required />
                {(phoneDirty && phoneError) && <p className='text-danger'>Введите корректный номер телефона</p>}
                
              </div>

              <input type="text" name='email' placeholder='Ваш email' />
              <select name="category" defaultValue="погрузчики">
                <option value="погрузчики">Погрузчики</option>
                <option value="запчасти">Запчасти</option>
                <option value="ремонт">Ремонт</option>
                <option value="другое">Другое</option>
            </select>
              <textarea name='comment' className='comment' rows="3" placeholder='Комментарий' />
              <p className='form-note'>
                <span style={{
                  color: "red"
                }}>*</span>
                &nbsp;-  обязательно для заполнения</p>
              <p className='policy'>Нажимая на кнопку "Отправить", я даю согласие на обработку Персональных данных</p>
              <input 
                disabled={!formValid}
                type="submit" 
                name="" 
                id="" 
                value="Отправить" />
            </form>
          </div>
      )}
        

      </div>
  )
}

Form.defaultProps = {isModal: false};