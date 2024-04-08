import React from "react"
import '../styles/clients.css'

export default function MainContent() {
  return (
    <section className="clients">
      <div className="container">
        <h3 className="title">
          Наши клиенты
        </h3>
        <ul className="clients__box">
          <li>
            <img src={require("../assets/clients/client_1.png")} alt="Красный октябрь" />
          </li>
          <li>
            <img src={require("../assets/clients/client_2.png")} alt="Группа компаний ПИК" />
          </li>
          <li>
            <img src={require("../assets/clients/client_3.png")} alt="Росэнергоатом" />
          </li>
          <li>
            <img src={require("../assets/clients/client_4.png")} alt="Рыбинский грузовой порт" />
          </li>
          <li>
            <img src={require("../assets/clients/client_5.png")} alt="Лукойл" />
          </li>
          <li>
            <img src={require("../assets/clients/client_6.png")} alt="Газпром" />
          </li>
        </ul>
      </div>
    </section>
  )
}