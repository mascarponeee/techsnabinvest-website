import AnimatedSlider from "../components/AnimatedSlider"
import Advantages from "../components/Advantages"
import Clients from "../components/Clients"

function Home() {
  return (
    <div className="Home">
      <AnimatedSlider />
      <Advantages />
      <Clients />
    </div>
  );
}

export default Home;