import React from "react";
import { Row, Col } from "reactstrap";
import flag from "../../assets/images/flag.jpg";
import "./style.css";
const Logo = () => {
  return (
    <Row className="logo" style={{ backgroundImage: `url(${flag})` }}>
      <Col sm={8} className="mx-auto text-center logo-font">
        <Row>
          <Col className="logo-title font-satisfy p-2 rounded">
            Mariachi Veracruzano
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Logo;
