import React from "react"
import '../styles/advantages.css'

export default function MainContent() {
  return (
    <>
    <section className="advantages bgd-highlight">
      <div className="container">
        <h3 className="title">
          Заказывая погрузочную технику у нас Вы получаете:
        </h3>
        <div className="grid">
          <div className="grid-cell usl1">
            Гарантия
            <br></br>
            2 года
          </div>
          <div className="grid-cell usl2">
            Собственный склад
            <br></br>
            с запчастями
          </div>
          <div className="grid-cell usl3 orange">
            Выездная ремонтная бригада
          </div>
          <div className="grid-cell usl4 orange">
            Официальный дистрибьютер
          </div>
          <div className="grid-cell usl5">
            Быстрые сроки
            <br></br>
            поставки
          </div>
          <div className="grid-cell usl6">
            Более 15 лет
            <br></br>
            на рынке
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}