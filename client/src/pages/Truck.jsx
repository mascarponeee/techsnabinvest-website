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
                <td>{truck.liftingCapacity} кг</td>
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
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Truck;