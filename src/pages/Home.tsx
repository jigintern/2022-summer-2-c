import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { Link } from "https://cdn.skypack.dev/wouter@2.7.5?dts";
import { Container, Grid, Label, Button, Input, Dimmer, Loader, Segment, Divider } from "https://esm.sh/semantic-ui-react@2.1.3";
import Map from "../../Map.tsx";
import { Footer } from "../component/footer.tsx";
import { HeaderS } from "../component/Header.tsx";
import { savingRouteData } from "../function/SavingRouteData.tsx";
import { getStoredRouteData } from "../function/GetStoredRouteData.tsx";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";

const MapUiConteinar = styled.div`
    position:  absolute; 
    top: 16px;
    left: 16px;
    background-color: white;
`;

const Title = styled.div`
    font-size: 20px;
`;

const button = styled.div`
`;

const word = styled.p`
    font-size: 10px;
`;

export const Home = (): React.ReactElement => {
  return (
    <>
      <HeaderS />
      <Map></Map>
      
      <MapUiConteinar>
        <Title>ルート決め</Title>
        <button>ルート</button>
        <p></p>
        <Title>ホットスポット</Title>
        <button 
          onClick={() => console.log("８時をクリックした")}>
          ８時 終了
        </button><br/>
        <button
          onClick={() => console.log("１７時をクリックした")}>
          17時 後〇〇
          </button>
      </MapUiConteinar >
      <Footer/>
    </>
  );
};