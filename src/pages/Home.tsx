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
    top: 90px;
    left: 8px;
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
  const nowTime = new Date()
  const startTIme8 = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), 8, 0, 0)
  const startTIme17 = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), 17, 0, 0)
  const leftTime = ''
  const difference17 = startTIme17.getTime() - nowTime.getTime() 
  const calculationHour17 = difference17 / 1000 / 60 / 60
  const calculationMinute17 = (difference17 / 1000 / 60) % 60
  const difference8 = startTIme8.getTime() - nowTime.getTime() 
  const calculationHour8 = difference8 / 1000 / 60 / 60
  const calculationMinute8 = (difference8 / 1000 / 60) % 60
  const flag8 = Math.sign(calculationHour8)
  const flag17 = Math.sign(calculationHour17)
  let message8 = ''
  let message17 = ''

  if (flag8 == -1) {
    message8 = '８時 終了'
  } else{
    message8 = '後' + Math.floor(calculationHour8) + '時間' + Math.floor(calculationMinute8) + '分'
  }

  if (flag17 == -1) {
    message17 = '１７時 終了'
  } else {
    message17 = '後' + Math.floor(calculationHour17) + '時間' + Math.floor(calculationMinute17) + '分'
  }

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
          {message8}
        </button><br/>
        <button
          onClick={() => console.log("１７時をクリックした")}>
          {message17}
        </button>
      </MapUiConteinar >
      <Footer/>
    </>
  );
};