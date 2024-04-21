import AnimatedSlider from "../components/AnimatedSlider"
import Advantages from "../components/Advantages"

function Repair() {
  return (
    <div className="Repair">
      <div className='container'>
        <h1 className="page_title">Ремонт</h1>
      </div>
      <AnimatedSlider />
      <Advantages />
    </div>
  );
}

export default Repair;