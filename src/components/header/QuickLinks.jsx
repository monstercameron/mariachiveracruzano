import React from "react";
import { Row, Col } from "reactstrap";
import text from "../../vars/text";
import "./style.css";
import UseLang from "../../hooks/useLang";
const QuickLinks = props => {
  const [getLang, switchLang] = UseLang();
  let test = getLang()
  console.log(getLang())
  if(test !== getLang()) console.log('updated!')
  return (
    <Row className="text-center">
      <Col
        sm={"auto"}
        className="mr-auto quick-link m-1 border text-capitalize"
        onClick={switchLang}
      >
        {text.quick[getLang()].lang}
      </Col>
      <Col
        sm={"auto"}
        className="ml-auto m-1 quick-link border text-capitalize"
      >
        {text.quick[getLang()].call}{" "}
        <a href={`tel:${text.quick.number}`}>{text.quick.number}</a>
      </Col>
    </Row>
  );
};
export default QuickLinks;
