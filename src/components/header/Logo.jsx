import React from "react";
import { Row, Col } from "reactstrap";
import flag from "../../assets/images/flag.jpg";
import style from "./Logo.module.css";
const Logo = () => {
  return (
    <Row
      className={`${style.logo}`}
      style={{ backgroundImage: `url(${flag})` }}
    >
      <Col className={`align-self-center ${style.banner} ${style.fontBanner}`}>
        Mariachi Veracruzano
      </Col>
    </Row>
  );
};
export default Logo;
