import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Favorites from "./components/Favorites";
const Routes: React.SFC = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Navbar>
            <HomePage />
          </Navbar>
        )}
      />
      <Route
        path="/favorites"
        render={() => (
          <Navbar>
            <Favorites />
          </Navbar>
        )}
      />
    </Switch>
  </div>
);

export default Routes;
