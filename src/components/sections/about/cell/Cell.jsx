import React, { useEffect, useState } from "react";
// import style from "./Cell.module.css";
import { Animated } from "react-animated-css";
const About = ({ image, hidden, direction = "Y", timer }) => {
  const [tick, setTick] = useState(hidden);
  useEffect(() => {
    setInterval(() => {
      setTick(!tick);
    }, timer);
  }, [tick]);
  let anim = [`flipIn${direction}`, `flipOut${direction}`,`fadeIn`,`fadeOut`];
  return (
    <Animated
      animationIn={anim[2]}
      animationOut={anim[3]}
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={tick}
    >
      <img src={image} alt="Avatar" className="img-fluid" />
    </Animated>
  );
};
export default About;
