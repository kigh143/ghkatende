import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RetoolingPage from "./features/retooling/RetoolingPage";
import WebsitePage from "./features/website/WebsitePage";
import Notfound from "./Notfound";

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WebsitePage} />
        <Route path="/retooling" exact component={RetoolingPage} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
