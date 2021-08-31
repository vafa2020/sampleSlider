import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";

const SliderApp = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="sliderApp">
      <FaArrowAltCircleRight className="arrRight" />
      <FaArrowAltCircleLeft  className="arrLeft" />
    </div>
  );
};

export default SliderApp;
