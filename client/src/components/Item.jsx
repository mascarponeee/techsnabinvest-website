import "../styles/item.css"

function Item({item}) {
  return (
    <div className="item">
      <div className="item__img">
        <a href="">
        <img src={require("../assets/catalog/truck_1.jpg")} alt="Фотография погрузчика" />
        </a>
      </div>
      <a href="" className="item__name">{item.name}</a>
      <div className="item__description">
        <p>Грузоподъемность (кг): <span>{item.liftingCapacity}</span></p>
        <p>Высота подъема (м): <span>{item.liftingHeight[0]}</span></p>
      </div>
      <a href="" className="item__more">Подробнее</a>
    </div>
  );
}

export default Item;