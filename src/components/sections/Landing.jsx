import React from "react";
import { Row, Col } from "reactstrap";
import text from "../../vars/text";
import bg from "../../assets/images/bw-guitar.jpg";
import style from "./Landing.module.css";
import UseLang from "../../hooks/useLang";
const Landing = props => {
  const [getLang] = UseLang();
  return (
    <Row className={`p-3 ${style.background}`}>
      <Col sm={8} className={`mx-auto`}>
        <Row className={``}>
          <Col sm={`auto`} className={`my-auto`}>
            <Row className={`p-0`}>
              <Col sm={"auto"} className={`p-0 shadow`}>
                <img
                  src={`https://via.placeholder.com/300`}
                  className={`img-fluid`}
                  alt="image alt label goes here"
                  height={`300px`}
                />
              </Col>
            </Row>
          </Col>
          <Col className={`p-0 ml-4 ${style.container}`}>
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
        </Row>
      </Col>
    </Row>
  );
};
export default Landing;
