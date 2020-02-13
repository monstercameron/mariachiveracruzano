import React from "react";
import { Row, Col } from "reactstrap";
import style from "./MainMenu.module.css";
import text from '../../vars/text'
import useLang from "../../hooks/useLang";
const MainMenu = props => {
  const [getLang] = useLang()
  return (
    <Row>
      <Col sm={8} className="mx-auto mt-1 mb-1">
        <Row className="text-center text-">
          <Col className={`${style.menuItem} mr-1 ml-1 p-1 pt-2 pb-2`}>
            {text.menu[getLang()].text1}
          </Col>
          <Col className={`${style.menuItem} mr-1 ml-1 p-1 pt-2 pb-2`}>
            {text.menu[getLang()].text2}
          </Col>
          <Col className={`${style.menuItem} mr-1 ml-1 p-1 pt-2 pb-2`}>
            {text.menu[getLang()].text3}
          </Col>
          <Col className={`${style.menuItem} mr-1 ml-1 p-1 pt-2 pb-2`}>
            {text.menu[getLang()].text4}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainMenu;
