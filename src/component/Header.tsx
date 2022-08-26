import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { Button, Container, Divider, Grid, Input, Dimmer, Loader } from "https://esm.sh/semantic-ui-react@2.1.3";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";


import { Link, useLocation } from "https://cdn.skypack.dev/wouter@2.7.5?dts";



export const HeaderS = (): React.ReactElement => {
  let isTopPage = true
  // const location = useLocation(); // URL path や パラメータなど。JSのlocationと同じ
  // const params = useParams();

  // console.log("\n\n");
  const a = useLocation();
  isTopPage = (a[0] === "/history" ? false : true);
  isTopPage = (a[0] === "/stamp_rally" ? false : true);


  // const supabase = createClient('https://mocbnakwlobvatjxzjws.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vY2JuYWt3bG9idmF0anh6andzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEyMzAxNTYsImV4cCI6MTk3NjgwNjE1Nn0.kRrg6uD1co42RwkTB2X9w7NZj4Gt5tdJ9TYJjYwbnSM')
  
  // console.log("\n\n");

  return (
    <header
      style={{
        position: ((a[0] === "/stamp_rally" || a[0] === "/history") ? "absolute" : "sticky"),
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
            style={{ fontSize: 25, color: "#333" }}
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

          {isTopPage && <Link to="/history"><Button> 
            過去の記録
          </Button></Link>}
          
          {isTopPage && <Link to="/stamp_rally"><Button> 
            スタンプラリー
          </Button></Link>}
        </nav>
      </div>
    </header>
  );
};