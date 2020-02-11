import React from "react";
import { withRouter } from "react-router-dom";
import Layout from "../layouts/Desktop";
import Logo from "../header/Logo";
import Menu from "../menu/MainMenu";
import QuickLinks from "../header/QuickLinks";
import Landing from "../sections/Landing";
import About from "../sections/About";
// import Services from "../sections/Services";
// import Contacts from "../sections/Contacts";
const HomePage = props => {
  return (
    <Layout>
      <QuickLinks />
      <Logo />
      <Menu />
      <Landing />
      <About />
      {/* <Services />
      <Contacts /> */}
    </Layout>
  );
};
export default withRouter(HomePage);
