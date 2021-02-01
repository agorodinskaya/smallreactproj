import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import DisplayColors from "./components/ColorGen";
import DisplayMarkDown from "./components/MarkDownPrev";
const ReactRouterSetup = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route path='/colors'>
            <DisplayColors />
          </Route>
          <Route path='/markdown'>
            <DisplayMarkDown />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default ReactRouterSetup;
