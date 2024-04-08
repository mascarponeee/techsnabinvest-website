import React, { useState } from "react"
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="left__col">
            <h3 className="footer__title">МЕНЮ</h3>
            <div className="footer__nav">
              <ul>
                <li>
                  <a href="#">Главная</a>
                </li>
                <li>
                  <a href="#">Автопогрузчики</a>
                </li>
                <li>
                <a href="#">Запчасти</a>
                </li>
                <li>
                <a href="#">Ремонт</a>
                </li>
                <li>
                <a href="#">Доставка</a>
                </li>
                <li>
                <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right__col">
          <h3 className="footer__title">КОНТАКТЫ</h3>
            <div className="comment">
              <p>Компания ООО "ТЕХСНАБИНВЕСТ"</p>
              <p>г. Москва, ул. Краснопрудная,д. 12/1с1</p>
            </div>
            <div className="contacts">
              <a href="tel:+74993435983" className="footer__phone">
                8 (499) 343-59-83
              </a>
              <a href="tel:+74993435985" className="footer__phone">
                8 (499) 343-59-85 (Отдел продаж)
              </a>
              <a href="tel:+79778093959" className="footer__phone">
                8 (977) 809-39-59 (Техподдержка)
              </a>
              <a href="mailto:343-59-83@mail.ru" className="footer__email">
              343-59-83@mail.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}