import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
const SliderApp = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  if(!Array.isArray(sliderData) || sliderData.length <=0){
      return null
  }
  //current.length=1,2,3,4,5
  //index=0,1,2,3,4
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  return (
    <div className="sliderApp">
      <FaArrowAltCircleRight className="arrRight" onClick={nextSlide} />
      <FaArrowAltCircleLeft className="arrLeft" onClick={prevSlide} />
      {sliderData.map((item, index) => {
        return (
          <div
            key={index}
            className={current === index ? "slide active" : "slide"}
          >
            {current === index && <img className="image" src={item.source} />}
          </div>
        );
      })}
    </div>
  );
};

export default SliderApp;
