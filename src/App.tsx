import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.2?dts";
import { Route, Switch } from "https://cdn.skypack.dev/wouter@2.7.5?dts";
import { Home } from "./pages/Home.tsx";
import { History } from "./pages/History.tsx";
import { StoreProvider } from "./hooks/store.tsx";
import { StampRally } from "./pages/StampRally.tsx";

const App = () => {
  return (
    <StoreProvider>
    <React.Fragment>
      <Switch>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/stamp_rally">
          <StampRally />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
    </StoreProvider>
  );
};

console.debug(document.querySelector("#main"))
addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.querySelector("#main"));
});