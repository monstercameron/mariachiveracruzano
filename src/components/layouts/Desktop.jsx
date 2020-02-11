import React from "react";
import { Container } from "reactstrap";
import "./style.css";
const DesktopLayout = ({ children }) => {
  return <Container fluid>{children}</Container>;
};
export default DesktopLayout;
