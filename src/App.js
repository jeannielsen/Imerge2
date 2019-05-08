import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Agencies from "./pages/agencies";
import Maps from "./pages/maps";
import Navbar from "./components/Navbar";
import News from "./pages/news";
import Translator from "./pages/translator";
// the hook
import { useTranslation } from 'react-i18next';
import "./i18n"


function App() {
  const { t } = useTranslation();

  return (
    // Router component initialized to virtual DOM
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/agencies" component={Agencies}/>
          <Route exact path="/maps" component={Maps}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/translator" component={Translator}/>
        </Switch>

      </div>
    </HashRouter>
  );
}

export default App;