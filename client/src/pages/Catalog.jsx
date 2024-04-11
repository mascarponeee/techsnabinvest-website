import React, { useEffect, useState } from 'react'
import Item from "../components/Item"
import "../styles/catalog.css"

function Catalog() {
  const [items, setItems] = useState([])

  const fetchItems = async () => {
    await fetch('http://localhost:5000/trucks')
      .then(res => res.json())
      .then(data => {setItems(data)})
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div className="catalog bgd-highlight">
      <div className="container">
        <h1 className="catalog__title ">Автопогрузчики</h1>
        <div className="wrapper">
          {items.map((item, index) => {
            {console.log(item)}
            return <Item key={index} item={item}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default Catalog;