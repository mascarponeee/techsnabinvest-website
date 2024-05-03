import '../styles/contacts.css'
import { MdPlace, MdPhone, MdEmail, MdAccessTimeFilled } from "react-icons/md"

function Contacts() {
  return (
    <div className="Contacts">
      <div className='container'>
        <h1 className="page_title">Контакты</h1>
        <div className='contacts-info'> 
          <div className='contacts-info-flex'> 
            <div className='contacts-info-block'> 
              <div className='contacts-info-block-header'>
                <MdPlace className='contact-icon' />
                <h3>
                  ОФИС КОМПАНИИ
                </h3>
              </div>
              <div className="contacts-info-block-body">
                г. Москва, ул. Краснопрудная,д. 12/1с1
              </div>
            </div>

            <div className='contacts-info-block'> 
              <div className='contacts-info-block-header'>
                <MdPhone className='contact-icon' />
                <h3>
                  ТЕЛЕФОН
                </h3>
              </div>
              <div className="contacts-info-block-body">
                <p className='phone'>+7 (499) 343-59-83</p>
                <p className='phone'>+7 (499) 343-59-85 (Отдел продаж)</p>
                <p className='phone'>+7 (977) 809-39-59 (Техподдержка)</p>
              </div>
            </div>
            
            <div className='contacts-info-block'> 
              <div className='contacts-info-block-header'>
                <MdEmail className='contact-icon' />
                <h3>
                  EMAIL
                </h3>
              </div>
              <div className="contacts-info-block-body">
                <a href="mailto:343-59-83@mail.ru">343-59-83@mail.ru</a>
              </div>
            </div>

            <div className='contacts-info-block'> 
              <div className='contacts-info-block-header'>
                <MdAccessTimeFilled className='contact-icon' />
                <h3>
                  РЕЖИМ РАБОТЫ
                </h3>
              </div>
              <div className="contacts-info-block-body">
                <p>Пн – Пт: 9:00 - 21:00</p>
                <p>Сб - Вс: 9:00 - 18:00</p>
              </div>
            </div>


          </div>

          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad9ea6c7809e2ceda71004fdbf22800fa4881cd06da50f0584c74c5bd3d85d225&amp;source=constructor" width="100%" height="400" className='ymap'></iframe>
        </div>
      
    </div>

    </div>
  );
}

export default Contacts;