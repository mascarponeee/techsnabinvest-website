import { useState, useEffect } from 'react'
import '../styles/modal_request.css'
import { AiOutlineClose  } from "react-icons/ai"

export default function ModalRequest( {setOpenModal} ) {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (nameError || phoneError) {
      setFormValid(false)
      console.log()
    } else 
      setFormValid(true)
  }, [nameError, phoneError])

  const submitForm = async (e) => {

    e.preventDefault();
    const formData = new FormData();

    formData.append('name', e.target.name.value)
    formData.append('phone', e.target.phone.value)
    e.target.email.value && formData.append('email', e.target.email.value)
    e.target.comment.value && formData.append('comment', e.target.comment.value)

    const dataForm = Object.fromEntries(formData)
    console.log(dataForm)

    try {
      const response = await fetch('http://localhost:5000/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataForm)
      });
  
      if (!response.ok) {
        throw new Error('Ошибка сети');
      }
  
      const data = await response.json();
      // Обработка успешного ответа от сервера
    } catch (error) {
      // Обработка ошибки
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
    const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
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
    <div className="modalBackground" onClick={() => {
      setOpenModal(false)}}
    >
      <div className="modalContainer" onClick={e => e.stopPropagation()}>
        <div className="titleCloseBtn">
        <AiOutlineClose 
          size={"28px"} 
          className='close_btn' 
          onClick={() => {
            setOpenModal(false)
          }} 
        />
        </div>
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
    </div>
  )
}