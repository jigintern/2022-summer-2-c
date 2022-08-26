import React, { useEffect, useState } from "https://cdn.skypack.dev/react@17.0.2?dts";
import { Link } from "https://cdn.skypack.dev/wouter@2.7.5?dts";
import { Container, Grid, Label, Button, Image, Dimmer, Loader, Segment, Divider } from "https://esm.sh/semantic-ui-react@2.1.3";
import Map from "../../Map.tsx";
import { Footer } from "../component/footer.tsx";
import { HeaderS } from "../component/Header.tsx";
import { savingRouteData, savinghotspotData } from "../function/SavingRouteData.tsx";
import { getStoredRouteData } from "../function/GetStoredRouteData.tsx";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Route } from "../data/routes.ts";
import { HomeViewModel } from "../view_model/HomeViewModel.ts";

const MapUiConteinar = styled.div`
    position:  absolute; 
    top: 90px;
    left: 8px;
    background-color: white;
`;

const Title = styled.div`
    font-size: 20px;
`;

const Word = styled.p`
    font-size: 10px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    `;

const ImgUiConteinar = styled.div`
    position:  absolute; 
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;

const FixRightTopButton = styled.button`
    position:  absolute;
    top: 8px;
    Right: 8px;
`;

export const Home = (): React.ReactElement => {
  const viewModel = new HomeViewModel();
  console.log("ホームページ作ったナリ");
  console.log(viewModel);
  useEffect(() => {
  }, ['key']);

  const [imageUrl, setShowImage] = useState("");

  const hotspotNumber = Math.floor(Math.random() * 3.0) + 1

  const nowTime = new Date()
  const startTime8 = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), 8, 0, 0)
  const startTime17 = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate(), 17, 0, 0)
  function difference(differenceTime: number) {

    return differenceTime - nowTime.getTime()

  }
  const difference8 = difference(startTime8.getTime())
  const difference17 = difference(startTime17.getTime())

  function hourCalculation(calculationHour: number) {

    return calculationHour / 1000 / 60 / 60

  }
  const calculationHour8 = hourCalculation(difference8)
  const calculationHour17 = hourCalculation(difference17)

  function minuteCalculation(calculationMinute: number) {

    return (calculationMinute / 1000 / 60) % 60

  }
  const calculationMinute8 = minuteCalculation(difference8)
  const calculationMinute17 = minuteCalculation(difference17)

  const flag8 = Math.sign(calculationHour8)
  const flag17 = Math.sign(calculationHour17)
  let message8 = ''
  let message17 = ''

  if (flag8 == -1) {
    message8 = '08時の部・・・終了しました'

  } else {
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
      <Map viewModel={viewModel}></Map>
      <MapUiConteinar>

        <Title>ルート決め</Title>
        <button onClick={() => {
          console.log('ふがふが　ルートボタン押したナリ');
          viewModel.selectRoute();
        }}>ルート表示</button>
        <p></p>
        <Title>ホットスポット</Title>

        <button
          onClick={() => {

            //setShowImage("/images/lawn.jpg")
            // hotspotNumber = Math.floor(Math.random() * 3.0) + 1
            if (hotspotNumber === 1) {
              setShowImage("/images/lawn.jpg")
            } else if (hotspotNumber === 2) {
              setShowImage("/images/observationTower.jpg")
            } else {
              setShowImage("/images/garden.jpg")
            }

            console.log("８時をクリックした");

            viewModel.setPHotspot(hotspotNumber);
          }}>
          {message8}
        </button><br />

        <button
          onClick={() => {

            //setShowImage("/images/animal.jpg")

            // hotspotNumber = Math.floor(Math.random() * 3.0) + 1
            // console.log("hotdpot")
            // console.log(hotspotNumber);
            if (hotspotNumber === 1) {
              setShowImage("/images/lawn.jpg")
            } else if (hotspotNumber === 2) {
              setShowImage("/images/observationTower.jpg")
            } else {
              setShowImage("/images/garden.jpg")
            }

            console.log("１７時をクリックした");
            // let hotspot = Math.floor(Math.random() * 3.0) + 1;
            // let bumon = "17時の部";
            // if(message8 != '17時の部・・・終了しました'){
            //   savinghotspotData(hotspot,bumon);
            // }
            viewModel.setPHotspot(hotspotNumber);
            }}>

          {message17}
        </button>
      </MapUiConteinar >

      {/* {imageUrl &&
        
          <ImgUiConteinar>
            <Img src={imageUrl}>
            </Img>
            <FixRightTopButton
              onClick={() => {

                setShowImage("")

              }}>
              ✖️
            </FixRightTopButton>

        </ImgUiConteinar>
        
      } */}
      <Footer />
    </>
  );
};