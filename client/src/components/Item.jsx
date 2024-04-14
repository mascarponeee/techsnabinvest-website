import "../styles/item.css"
import { Link } from 'react-router-dom'

function Item({item}) {
  return (
    <div className="item">
      <div className="item__img">
        <Link to={`/catalog/${item._id}`}>
        <img src={require("../assets/catalog/images/lza-40810-kh3-3.jpg")} alt="Фотография погрузчика" />
        </Link>
      </div>
      <Link to={`/catalog/${item._id}`} className="item__name">{item.name}</Link>
      <div className="item__description">
        <p>Грузоподъемность (кг): <span>{item.liftingCapacity}</span></p>
        <p>Высота подъема (м): <span>{item.liftingHeight[0]}</span></p>
      </div>
      <Link to={`/catalog/${item._id}`} className="item__more">Подробнее</Link>
    </div>
  );
}

export default Item;