import React from "react";
import { Row, Col } from "reactstrap";
import text from "../../vars/text";
import bg from "../../assets/images/bw-guitar.jpg";
import "./style.css";
const Landing = props => {
  const { getLang } = props;
  return (
    <Row
      className="landing text-dark"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Col sm={2}></Col>
      <Col sm={8}>
        <Row className="text-center">
          <Col
            sm={7}
            className=" mt-5 mb-3 rounded p-2 landing-textbox-contrast mx-auto shadow"
          >
            {text.landing[getLang()].text1}
          </Col>
          <Col
            sm={10}
            className=" mt-5 mb-3 rounded p-2 landing-textbox-contrast mx-auto shadow"
          >
            {text.landing[getLang()].text2}5
          </Col>
          <Col
            sm={6}
            className=" mt-5 mb-5 rounded p-2 landing-textbox-contrast mx-auto shadow"
          >
            {text.landing[getLang()].text3}
          </Col>
        </Row>
      </Col>
      <Col sm={2}></Col>
    </Row>
  );
};
export default Landing;
