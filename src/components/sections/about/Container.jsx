import React from "react";
import style from "./Container.module.css";
import { Row, Col } from "reactstrap";
import Cell from "./cell/Cell";
const Container = () => {
  const importAll = (r) => {
    return r.keys().map(r);
  };
  const images = importAll(
    require.context(
      "../../../assets/images/instafeed",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const randomChance = (chancePercent) =>
    Math.random() >= 1 - chancePercent / 100;

  const randomTime = (min = 5000, max = 10000) =>
    Math.floor(Math.random() * (max - min)) + min;

  return (
    <Row>
      <Col sm={12} className={`${style.container} mx-auto`}>
        {images.map((image, index) => (
          <Cell
            key={`Cell-${index}`}
            image={image}
            hidden={randomChance(60)}
            timer={randomTime()}
          />
        ))}
      </Col>
    </Row>
  );
};

export default Container;
