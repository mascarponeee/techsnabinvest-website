import { useParams } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react'
import "../styles/truck.css"
import {ModalContext} from "../utils/OpenModal"

function Truck() {

  const { id } = useParams();
  console.log(id)
  const [truck, setTruck] = useState({})
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useContext(ModalContext);

  useEffect(() => {
    const fetchTruck = async () => {
      try {
        const response = await fetch(`http://localhost:5000/trucks/${id}`);
        if (!response.ok) {
          throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }
        let data = await response.json();
        setTruck(data);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        return (
          <h1>Error</h1>
        )
      }
    };
  

    fetchTruck();
}, []);

  console.log(truck)

  const openBookletInNewTab = async () => {
    if (!id) {
        console.error('Идентификатор товара отсутствует');
        return;
    }

    try {
        const url = `http://localhost:5000/api/booklet/${id}`;
        window.open(url, '_blank');
    } catch (error) {
        console.error('Ошибка при открытии буклета:', error);
    }
  };

  if (loading) {
    return (
      <div>
        <p></p>
      </div>
    );
  }


  return (
    <div className="Truck">
      <div className='container'>
        <h1 className='truck_title'>{ truck.name }</h1>
      </div>

           
      <div className='bgd-highlight'>
        <div className='container'>
        <section className='truck_preview'>
          <div className='truck_img'>
          {truck && truck.imagePath && truck.imagePath[0] && (
          <img src={require(`../assets/${truck.imagePath[0]}`)} alt="Погрузчик" />
          )}
          </div>
          <div className='truck_details'>
          {truck && (
            <table>
              <tbody>
              <tr>
                <td>Грузоподъемность, кг</td>
                <td>{truck.liftingCapacity}</td>
              </tr>
              <tr>
                <td>Высота подъема вил, мм</td>
                {truck && truck.liftingHeight && truck.liftingHeight[0] && (
                <td>{truck.liftingHeight[0]} ({truck.liftingHeight[1]})</td>
                 )}
              </tr>
              <tr>
                <td>Двигатель</td>
                {truck && truck.engine && truck.engine.model && (
                <td>{truck.engine.model}</td>
                 )}
              </tr>
              <tr>
                <td>Коробка передач</td>
                {truck && truck.transmission && truck.transmission.type && (
                <td>{truck.transmission.type}</td>
              )}
              </tr>
              <tr>
                <td>Максимальная скорость, км/ч</td>
                <td>{truck.maximumSpeed}</td>
              </tr>
              <tr>
                <td>Масса снаряженного автопогрузчика, кг</td>
                <td>{truck.weight}</td>
              </tr>
              </tbody>
            </table>
          )}

            <div className="links">
              <a href="" onClick={() => openBookletInNewTab()} className='download'  target="_self">Скачать брошюру</a>
              <a href="#" className='request_btn' onClick={() => {
                  setModalOpen(true);
                }}>Оставить заявку</a>
            </div>
          </div>
        </section>
        </div>
      </div>

      <div className='block_yak'>
        <a href="#features" className='yak_item'>
          ХАРАКТЕРИСТИКИ
        </a>
        <a href="#description" className='yak_item'>
          ОПИСАНИЕ
        </a>
        <a href="#photos" className='yak_item'>
          ГАЛЕРЕЯ
        </a>
      </div>
      
      <div className="container">
        <section className='features'>
          <h2 id='features' className='section_title'>ХАРАКТЕРИСТИКИ</h2>
          {truck && (
            <table>
              <tbody>
                <tr>
                  <td>Тип двигателя</td>
                  {truck && truck.engine && truck.engine.type && (
                  <td>{truck.engine.type}</td>
                  )}
                </tr>
                <tr>
                  <td>Марка двигателя</td>
                  {truck && truck.engine && truck.engine.model && (
                  <td>{truck.engine.model}</td>
                  )}
                </tr>
                <tr>
                  <td>Грузоподъемность, кг</td>
                  <td>{truck.liftingCapacity}</td>
                </tr>
                <tr>
                  <td>Высота подъема вил, мм</td>
                  {truck && truck.liftingHeight && truck.liftingHeight[0] && (
                  <td>{truck.liftingHeight[0]} ({truck.liftingHeight[1]})</td>
                  )}
                </tr>
                <tr>
                  <td>Количество мест</td>
                  {truck && truck.cabin && truck.cabin.seatingCapacity && (
                  <td>{truck.cabin.seatingCapacity}</td>
                )}
                </tr>
                <tr>
                  <td>Материал кабины</td>
                  {truck && truck.cabin && truck.cabin.material && (
                  <td>{truck.cabin.material}</td>
                )}
                </tr>

                <tr>
                  <td>Отопление кабины</td>
                  {truck && truck.cabin && truck.cabin.heating && (
                  <td>{truck.cabin.heating ? "Есть" : "Нет"}</td>
                )}
                </tr>
                <tr>
                  <td>Коробка передач</td>
                  {truck && truck.transmission && truck.transmission.type && (
                  <td>{truck.transmission.type}</td>
                )}
                </tr>
                <tr>
                  <td>Количество передач</td>
                  {truck && truck.transmission  && truck.transmission.speeds && (
                  <td>{truck.transmission.speeds}</td>
                )}
                </tr>
                <tr>
                  <td>Обозначение шин</td>
                  {truck && truck.tires && truck.tires.front && (
                  <td>{"передние - " + truck.tires.front.size} <br></br>{"задние - " + truck.tires.rear.size}</td>
                )}
                </tr>
                <tr>
                  <td>Модели шин</td>
                  {truck  && truck.tires.front && (
                  <td>{"передние - " + truck.tires.front.model} <br></br>{"задние - " + truck.tires.rear.model}</td>
                )}
                </tr>
                <tr>
                  <td>Длина без вил, мм</td>
                  {truck  && truck.dimensions.lengthWithoutAttachment && (
                  <td>{truck.dimensions.lengthWithoutAttachment}</td>
                )}
                </tr>
                <tr>
                  <td>Длина с вилами, мм</td>
                  {truck  && truck.dimensions.lengthWithAttachment && (
                  <td>{truck.dimensions.lengthWithAttachment}</td>
                )}
                </tr>
                <tr>
                  <td>Высота при опущенных вилах, мм</td>
                  {truck && truck.dimensions.height && (
                  <td>{truck.dimensions.height}</td>
                )}
                </tr>
                <tr>
                  <td>База, мм</td>
                  {truck  && truck.dimensions.base && (
                  <td>{truck.dimensions.height}</td>
                )}
                </tr>
                <tr>
                  <td>Масса снаряженного автопогрузчика, кг</td>
                  {truck  && truck.weight && (
                  <td>{truck.weight}</td>
                )}
                </tr>
                <tr>
                  <td>Максимальная скорость, км/ч</td>
                  {truck  && truck.maximumSpeed && (
                  <td>{truck.maximumSpeed}</td>
                )}
                </tr>
                <tr>
                  <td>Мин. преодолеваемый уклон, %</td>
                  {truck  && truck.gradeability && (
                  <td>{truck.gradeability}</td>
                )} 
                </tr>
                <tr>
                  <td>Радиус поворота по наружному габариту, мм</td>
                  {truck  && truck.turningRadius && (
                  <td>{truck.turningRadius}</td>
                )} 
                </tr>
                <tr>
                  <td>Мин. дорожный просвет под грузоподъемником, мм </td>
                  {truck  && truck.clearance && (
                  <td>{truck.clearance}</td>
                )} 
                </tr>
                <tr>
                  <td>Углы наклона рамы грузоподъемника, °</td>
                  {truck  && truck.tiltAngles && truck.tiltAngles.forward && truck.tiltAngles["backward"] && (
                  <td>{"вперед - " + truck.tiltAngles.forward}
                    <br />
                    {"назад - " + truck.tiltAngles["backward"]}
                  </td>
                )} 
                </tr>
                </tbody>
            </table>
          )}
        </section>
      </div>

      <div className='bgd-highlight'>
        <div className="container">
          <section className='description'>
            <h2 id='description' className='section_title'>ОПИСАНИЕ</h2>
            {truck && truck.description && (
              <p className='description_main'>{truck.description}</p> 
            )}
            <h3>Особенности данной модели</h3>
            {truck && truck.features && (
              <ul>
                {truck.features.map((feature) => {
                  return <li>{feature}</li>
                })}
              </ul>
            )}

            <h3>Комплекты навесного оборудования</h3>
            {truck && truck.attachments && (
              <ul>
                {truck.attachments.map((attachment) => {
                  return <li>{attachment}</li>
                })}
              </ul>
            )}
          </section>
        </div>
      </div>
          
    </div>
  );
}

export default Truck;