import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Agencies from "./pages/agencies";
import Maps from "./pages/maps";
import Navbar from "./components/Navbar";
import News from "./pages/news";
import Translator from "./pages/translator";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to Imerge": "Bienvenido a Imerge"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();

  console.log(t("Welcome to Imerge"));
  return (
    // Router component initialized to virtual DOM
    <Router>
      <div>
        <Navbar />
        {/* <Switch> */}
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/agencies"} component={Agencies} />
          <Route exact path={process.env.PUBLIC_URL + "/maps"} component={Maps} />
          <Route exact path={process.env.PUBLIC_URL + "/news"} component={News} />
          <Route exact path={process.env.PUBLIC_URL + "/translator"} component={Translator} />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;