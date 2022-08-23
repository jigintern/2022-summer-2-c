import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { Button, Container, Divider, Grid, Input, Dimmer, Loader } from "https://esm.sh/semantic-ui-react@2.1.3";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";

import { Link } from "https://cdn.skypack.dev/wouter@2.7.5?dts";




export const HeaderS = (): React.ReactElement => {
  const isTopPage = true
  

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
            style={{ fontSize: 40, color: "#333" }}
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
};