import React from "react"
import Logo from "../assets/header-logo.png"
import '../styles/header.css'

export default function Header() {
  return (
    <header className="header">
        <div className="container">
          <div className="header__row">
            <div className="header__logo">
              <img src={Logo} alt="Логотип ООО'ТЕХСНАБИНВЕСТ'" />
            </div>
            <div className="header__nav">
              <ul className="menu">
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
            {/* <div className="header__contacts">CONTACTS</div> */}
          </div>
        </div>
    </header>
  )
}