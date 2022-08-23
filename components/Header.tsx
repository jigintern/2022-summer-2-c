import { Link } from "aleph/react";
import { Button, Container, Divider, Grid, Input, Dimmer, Loader } from "https://esm.sh/semantic-ui-react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";

export default function Header() {
  // const isTopPage = window.location
  
  console.log(useLocation());
  //const location = useLocation(); 
  const isTopPage = true;
  

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          maxWidth: 900,
          height: "100%",
          margin: "0 auto",
        }}
      >
        <h1>
          <Link
            style={{ fontSize: 16, color: "#333" }}
            to="/"
          >
          お散歩ぽん
          </Link>
        </h1>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          {isTopPage && <Button as="a" href="../history">
            過去の記録
          </Button>}
          <script>
            console.log(window.location);
          </script>
          
        </nav>
      </div>
    </header>
  );
}
