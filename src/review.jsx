import { useState, useTransition } from "react";
import Data from "./data";
import "./styles.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, testimonial, designation, image } = Data[index];

  const checkNumber = (number) => {
    // Return first element if number is greater than array size
    if (number > Data.length - 1) {
      return 0;
    }
    // Return last element if number is smaller than array size
    if (number < 0) {
      return Data.length - 1;
    }

    return number;
  };

  const prevSlider = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextSlider = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomtestimonial = () => {
    let randomNumber = Math.floor(Math.random() * Data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    return setIndex(checkNumber(randomNumber));
  };

  return (
    <div className="review">
      <div className="slider__section">
        <img src={image} alt={name} className="personImage" />
        <h3 className="personName">{name}</h3>
        <p className="designation">{designation}</p>
        <p className="testimonials">{testimonial}</p>
      </div>
      <div className="navigation">
        <button onClick={prevSlider}>
          <AiOutlineArrowLeft style={{ fontSize: 22 }} />
        </button>
        <button onClick={nextSlider}>
          <AiOutlineArrowRight style={{ fontSize: 22 }} />
        </button>
      </div>
      <button className="random" onClick={randomtestimonial}>
        Random
      </button>
    </div>
  );
}
