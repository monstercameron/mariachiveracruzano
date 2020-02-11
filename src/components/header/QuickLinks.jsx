import React, {useState} from "react";
import { Row, Col } from "reactstrap";
import text from "../../vars/text";
import "./style.css";
import { GlobalContext } from "../../context/GlobalContext";
const QuickLinks = props => {
  const { getLang, setLang } = props;
  const [compLang, setCompLang] = useState(getLang())
  if(compLang !== getLang()) setCompLang(getLang())
  return (
    <GlobalContext.Consumer>
      {([state, setState]) => {
        console.log(state);
        const updateLang = () => {console.log(state);setState(Object.assign(state, { lang: state.lang === "en" ? "es" : "en" }));}
        return (
          <Row className="text-center">
            <Col
              sm={"auto"}
              className="mr-auto quick-link m-1 border text-capitalize"
              onClick={updateLang}
            >
              {text.quick[compLang].lang}
            </Col>
            <Col
              sm={"auto"}
              className="ml-auto m-1 quick-link border text-capitalize"
            >
              {text.quick[state.lang].call}{" "}
              <a href={`tel:${text.quick.number}`}>{text.quick.number}</a>
            </Col>
          </Row>
        );
      }}
    </GlobalContext.Consumer>
  );
};
export default QuickLinks;
