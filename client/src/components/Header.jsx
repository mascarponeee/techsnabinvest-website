import { NavLink } from 'react-router-dom';

import React, { useState } from "react"
import Logo from "../assets/header-logo.png"
import '../styles/header.css'
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai"

export default function Header() {

  const fetchTrucks = async () => {
    try {
      const response = await fetch('http://localhost:5000/trucks');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const [ menu, setMenu ] = useState(false)

  return (
    <header className="header">
        <div className="container">
          <div className="header__row">
            <NavLink to="/" className="header__logo">
              <img src={Logo} alt="Логотип ООО'ТЕХСНАБИНВЕСТ'" />
            </NavLink>
            <div className="header__nav">
              <ul className={menu ? "menu active" : "menu"}>
                <li>
                  <NavLink to="/catalog" onClick={() => setMenu(false)}>Автопогрузчики</NavLink>
                </li>
                <li>
                  <NavLink to="/parts"onClick={() => setMenu(false)}>Запчасти</NavLink>
                </li>
                <li>
                  <NavLink to="/repair"onClick={() => setMenu(false)}>Ремонт</NavLink>
                </li>
                <li>
                  <NavLink to="/delivery"onClick={() => setMenu(false)}>Доставка</NavLink>
                </li>
                <li>
                  <NavLink to="/about"onClick={() => setMenu(false)}>О нас</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts"onClick={() => setMenu(false)}>Контакты</NavLink>
                </li>
              </ul>
              <div className="header__contacts">
                <a href="tel:+74993435983" className="header__phone">
                  8 (499) 343-59-83
                </a>
                <a href="##" onClick={fetchTrucks}className="header__btn">ОСТАВИТЬ ЗАЯВКУ</a>
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