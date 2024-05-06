import "../styles/banner.css"
import SliderImg from "../assets/slider/slider-3.jpg"
import '../styles/animatedSlider.css'
import { NavLink } from 'react-router-dom';

export default function Banner(props) {
  return (
    <section className="container">
      <div className="banner">
        <img src={props.img.path} alt="" className="banner__img"/>
        <div className="banner__description">
          <h1 className="banner__description_title">{props.description}</h1>
          <p className="banner__description_body">{props.body}</p>
          {props.button &&  <NavLink to={props.button.path} className="banner__description_btn">
          {props.button.text}
          </NavLink>}
        </div>
      </div>
    </section>
  )
}