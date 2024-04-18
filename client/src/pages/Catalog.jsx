import React, { useEffect, useState } from 'react'
import Item from "../components/Item"
import "../styles/catalog.css"

function Catalog() {
  const [items, setItems] = useState([])

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/trucks');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div className="catalog">
      <div className='catalog_top container'>
        <h1 className='page_title'>Автопогрузчики</h1>
      </div>
      <div className='catalog_main bgd-highlight'>
        <div className="container">
          <div className="wrapper">
            {items.map((item, index) => {
              {console.log(item)}
              return <Item key={item._id} item={item}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;