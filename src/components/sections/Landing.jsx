import React from "react";
import { Row, Col } from "reactstrap";
import text from "../../vars/text";
import bg from "../../assets/images/bw-guitar.jpg";
import style from "./Landing.module.css";
import UseLang from "../../hooks/useLang";
const Landing = props => {
  const [getLang] = UseLang();
  return (
    <Row className={`${style.background} p-2 pb-3`}>
      <Col sm={'auto'} className={`mx-auto`}>
        <Col className={`p-0 ml-4 ${style.container} mx-auto`}>
          <div className={`${style.el4}`}>
            <Row className={``}>
              <img
                src={`https://via.placeholder.com/300`}
                className={`d-inline-block img-fluid`}
                alt="image alt label goes here"
                height='100%'
                width='100%'
              />
            </Row>
          </div>
          <div className={`border shadow p-2 ${style.el1}`}>
            <Row className={`h-100`}>
              <Col className={`my-auto`}>{text.landing[getLang()].text1}</Col>
            </Row>
          </div>
          <div className={`border shadow p-2 ${style.el2}`}>
            <Row className={`h-100`}>
              <Col className={`my-auto`}>{text.landing[getLang()].text2}</Col>
            </Row>
          </div>
          <div className={`border shadow p-2 ${style.el3}`}>
            <Row className={`h-100`}>
              <Col className={`my-auto`}>{text.landing[getLang()].text3}</Col>
            </Row>
          </div>
        </Col>
      </Col>
    </Row>
  );
};
export default Landing;
