import React from "react";
import { Container } from "reactstrap";
import "./style.css";
const DesktopLayout = props => {
  const content = () => {
    return [
      props.quick,
      props.header,
      props.menu,
      props.landing,
      props.about
      //disabled to load faster
      //props.services,
      //props.contacts,
      //props.footer
    ].map((Component, index) => {
      return <Component key={`section-${index}`} {...props} />;
    });
  };
  console.log(props);
  return <Container fluid>{content()}</Container>;
};
export default DesktopLayout;
