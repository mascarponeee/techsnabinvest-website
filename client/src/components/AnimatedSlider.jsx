import React from "react"
import SliderImg from "../assets/slider/slider-3.jpg"
import '../styles/animatedSlider.css'

export default function AnimatedSlider() {
  return (
    <section className="container">
      <div className="slider">
        <img src={SliderImg} alt="slider" className="slider__img"/>
        <div className="slider__description">
          <h1 className="slider__description_title">Продажа запчастей</h1>
          <p className="slider__description_body">Собственный склад на 15 000 позиций,  а также возможность привезти под заказ необходимую запчасть.  </p>
          <a href="#" className="slider__description_btn">
          Купить
        </a>
        </div>
      </div>
    </section>
  )
}