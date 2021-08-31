import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { sliderData } from "./sliderData";
import { useState } from "react";
const SliderApp = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="sliderApp">
      <FaArrowAltCircleRight className="arrRight" />
      <FaArrowAltCircleLeft className="arrLeft" />
      {sliderData.map((item) => {
        return <img key={item.id} className="image" src={item.source} />;
      })}
    </div>
  );
};

export default SliderApp;
