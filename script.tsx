import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.2?dts";
import {
  Link,
  Route,
  Switch,
} from "https://cdn.skypack.dev/wouter@2.7.5?dts";
import styled, {
  createGlobalStyle,
} from "https://cdn.skypack.dev/styled-components@5.3.3?dts";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </List>
        </Nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}

const List = styled.ul`
  display: flex;
  padding-inline-start: 0;

  li {
    list-style-type: none;
    margin-right: 8px;
  }
`;

const Nav = styled.nav`
  width: 100%;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #eee;
`;

function Home() {
  return (
    <Main>
      <Heading>Home</Heading>
      <p>This is Home page</p>
    </Main>
  );
}

function About() {
  return (
    <Main>
      <Heading>About</Heading>
      <p>This is About page</p>
    </Main>
  );
}

function Users() {
  return (
    <Main>
      <Heading>Users</Heading>
      <p>This is Users page</p>
    </Main>
  );
}

const Main = styled.main`
  padding: 15px;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 900;
  color: #500;
`;

function main() {
  ReactDOM.render(<App />, document.querySelector("#main"));
}

addEventListener("DOMContentLoaded", () => {
  main();
});