import "./App.css";
import SliderApp from "./component/SliderApp";
import { sliderData } from "./component/sliderData";

function App() {
  return (
    <div className="App">
      <h2 className="title">slider-App</h2>
      <SliderApp sliderData={sliderData} />
    </div>
  );
}

export default App;
