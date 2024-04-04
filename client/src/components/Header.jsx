import React, { useState } from "react"
import Logo from "../assets/header-logo.png"
import '../styles/header.css'
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai"

export default function Header() {

  const [ menu, setMenu ] = useState(false)

  return (
    <header className="header">
        <div className="container">
          <div className="header__row">
            <div className="header__logo">
              <img src={Logo} alt="Логотип ООО'ТЕХСНАБИНВЕСТ'" />
            </div>
            <div className="header__nav">
              <ul className={menu ? "menu active" : "menu"}>
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
              <div className="header__contacts">
                <span className="header__phone">8 (423) 275-65-85</span>
                <a href="##" className="header__btn">ОСТАВИТЬ ЗАЯВКУ</a>
            </div>
            </div> 
            <div onClick={() => setMenu(!menu)} className="mobile_btn">
              {menu ? <AiOutlineClose size={28} color="#ffff"/> : <AiOutlineMenu size={28} />}
            </div>
          </div>
        </div>
    </header>
  )
}