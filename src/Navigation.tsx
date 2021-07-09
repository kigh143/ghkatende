import React, { useEffect } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import RetoolingPage from "./features/retooling/RetoolingPage";
import WebsitePage from "./features/website/WebsitePage";
import Notfound from "./Notfound";

const Navigation: React.FC = () => {
  useEffect(() => {
    localStorage.removeItem("persist:root");
  }, []);
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={WebsitePage} />
        <Route path="/retooling" exact component={RetoolingPage} />
        <Route component={Notfound} />
      </Switch>
    </HashRouter>
  );
};

export default Navigation;
