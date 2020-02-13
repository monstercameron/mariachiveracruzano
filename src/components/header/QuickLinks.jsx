import React from "react";
import { Row, Col } from "reactstrap";
import text from "../../vars/text";
import style from "./QuickLinks.module.css";
import UseLang from "../../hooks/useLang";
const QuickLinks = props => {
  const [getLang, switchLang] = UseLang();
  return (
    <Row className={`${style.links} p-0`}>
      <Col
        sm={"auto"}
        className={`mr-auto text-left ${style.icon} ${style.pointer}`}
      >
        <i className="material-icons" onClick={switchLang}>
          language
        </i>
        <span>{getLang()}</span>
      </Col>
      <Col
        sm={"auto"}
        className={`ml-auto text-right ${style.icon} ${style.pointer}`}
      >
        <span className={`text-capitalize`}>{text.quick[getLang()].call}</span>
        <i className="material-icons">phone</i>
      </Col>
    </Row>
  );
};
export default QuickLinks;