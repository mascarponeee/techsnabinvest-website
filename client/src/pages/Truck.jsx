import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import "../styles/truck.css"

function Truck() {

  const { id } = useParams();
  const [truck, setTruck] = useState({})

  const fetchTruck = async () => {
    try {
      const response = await fetch(`http://localhost:5000/trucks/${id}`);
      const data = await response.json();
      setTruck(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      return (
        <h1>Error</h1>
      )
    }
  };

  useEffect(() => {
    fetchTruck()
  }, [])

  console.log(truck)

  const openBookletInNewTab = async () => {
    if (!id) {
        console.error('Идентификатор товара отсутствует');
        return;
    }

    try {
        // Формируем URL для запроса буклета
        const url = `http://localhost:5000/api/booklet/${id}`;
        // Открываем URL в новой вкладке
        window.open(url, '_blank');
    } catch (error) {
        // Обрабатываем ошибки при запросе к серверу
        console.error('Ошибка при открытии буклета:', error);
    }
  };


  return (
    <div className="Truck">
      <div className='container'>
      <h1 className='truck_title'>{ truck.name }</h1>
      </div>
      
      <div className='bgd-highlight'>
        <div className='container'>
        <div className='truck_preview'>
          <div className='truck_img'>
          {truck && truck.imagePath && truck.imagePath[0] && (
          <img src={require(`../assets/${truck.imagePath[0]}`)} alt="Погрузчик" />
          )}
          </div>
          <div className='truck_details'>

            <table>
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
            </table>

            <div className="links">
              <a href="" onClick={() => openBookletInNewTab()} className='download'  target="_self">Скачать брошюру</a>
              <a href="#" className='request_btn'>Оставить заявку</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Truck;