import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../layouts/Desktop";
import Logo from "../header/Logo";
import Menu from "../menu/MainMenu";
import QuickLinks from "../header/QuickLinks";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Services from "../sections/Services";
import Contacts from "../sections/Contacts";
import { GlobalContext } from "../../context/GlobalContext";
const HomePage = props => {
  const [state, setState] = useContext(GlobalContext);
  const getLang = () => state.lang;
  const setLang = () => {
    console.log(state);
    setState(Object.assign(state, { lang: state.lang === "en" ? "es" : "en" }));
  };
  return (
    <Layout
      getLang={getLang}
      setLang={setLang}
      quick={QuickLinks}
      header={Logo}
      menu={Menu}
      landing={Landing}
      about={About}
      services={Services}
      contacts={Contacts}
    />
  );
};
export default withRouter(HomePage);
