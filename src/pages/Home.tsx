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
  const startTime8 = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), 8, 0, 0)
  const startTime17 = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), 17, 0, 0)
  const leftTime = ''
  function difference(differenceTime: number) {

    return differenceTime - nowTime.getTime()
  
  }
  console.log(difference(startTime8.getTime()))
  console.log(difference(startTime17.getTime()))
  const difference8 = difference(startTime8.getTime())
  const difference17 = difference(startTime17.getTime())

  function hourCalculation(calculationHour: number) {

    return calculationHour / 1000 / 60 / 60

  }
  console.log(hourCalculation(difference8))
  console.log(hourCalculation(difference17))
  const calculationHour8 = hourCalculation(difference8)
  const calculationHour17 = hourCalculation(difference17)

  function minuteCalculation(calculationMinute: number) {

    return (calculationMinute / 1000 / 60) % 60

  }
  console.log(minuteCalculation(difference8))
  console.log(minuteCalculation(difference17))
  const calculationMinute8 = minuteCalculation(difference8)
  const calculationMinute17 = minuteCalculation(difference17)

  const flag8 = Math.sign(calculationHour8)
  const flag17 = Math.sign(calculationHour17)
  let message8 = ''
  let message17 = ''

  if (flag8 == -1) {
    message8 = '08時の部・・・終了しました'

  } else{
    message8 = '08時の部・・・後' + Math.floor(calculationHour8) + '時間' + Math.floor(calculationMinute8) + '分'
  }

  if (flag17 == -1) {
    message17 = '17時の部・・・終了しました'
  } else {
    message17 = '17時の部・・・後' + Math.floor(calculationHour17) + '時間' + Math.floor(calculationMinute17) + '分'
  }

  return (
    <>
      <HeaderS />
      <Map></Map>
      
      <MapUiConteinar>
        <Title>ルート決め</Title>
        <button>ルート表示</button>
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