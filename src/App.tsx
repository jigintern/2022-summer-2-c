import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.2?dts";
import { Route, Switch } from "https://cdn.skypack.dev/wouter@2.7.5?dts";
import { Home } from "./pages/Home.tsx";
import { History } from "./pages/History.tsx";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

console.debug(document.querySelector("#main"))
addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.querySelector("#main"));
});