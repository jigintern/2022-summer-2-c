import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Footer } from "../component/footer.tsx";
import { Container, Grid, Header, Label, Button, Image, Dimmer, Loader, Segment, Divider } from "https://esm.sh/semantic-ui-react@2.1.3";
import { StampRallyViewModel } from "../view_model/StampRallyViewModel.ts";
import { HeaderS } from "../component/Header.tsx";
import { GoogleMap, LoadScript, Polyline, Circle, InfoBox } from "https://cdn.skypack.dev/@react-google-maps/api?dts";

import { useEffect, useState } from 'https://cdn.skypack.dev/react@17.0.2?dts';


const StampButton = styled.button`
    position:  absolute;
    top: 8px;
    Right: 8px;
`;

const ImgUiConteinar = styled.div`
    position: absolute; 
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    `;

const containerStyle = {
  width: "100vw",
  height: "30%",
};

const center = {
  lat: 35.9512782,
  lng: 136.1830219,
};
const goalOptions = {
  strokeColor: '#00FF00',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#00FF00',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 20,
  zIndex: 1
}
const infoboxOptions = { closeBoxURL: '', enableEventPropagation: true };


export const StampRally = (): React.ReactElement => {
  const viewModel = new StampRallyViewModel();

  const [imageUrl1, setShowImage1] = useState("/images/1.png");
  const [imageUrl2, setShowImage2] = useState("/images/2.png");
  const [imageUrl3, setShowImage3] = useState("/images/3.png");
  const [imageUrl4, setShowImage4] = useState("/images/4.png");
  const [imageUrl5, setShowImage5] = useState("/images/5.png");
  const [imageUrl6, setShowImage6] = useState("/images/6.png");
  
  useEffect(() => {
    console.log('ヒストリー');
  },['key']);

  return (
    <Container textAlign="center">
      <HeaderS />
      <br />
      <br />
      <Divider section></Divider>

      <Header>スタンプラリー</Header>

      <LoadScript googleMapsApiKey="AIzaSyA21hP2aaQA54UNFQFq8he2G0REvzX6Vd4">
        <GoogleMap
          mapContainerStyle={containerStyle}
  //        center={center}
          center={center}
          zoom={16}
        >
          {viewModel.stampRallySpots.map((item)=>
            <><InfoBox options={infoboxOptions} position={item.coordinate}>
              <div style={{ backgroundColor: 'red',opacity: 0.75,padding: 2 }}>
                <div style={{ fontSize: 10,}}>{item.name}</div>
              </div>
            </InfoBox>
            <Circle center={item.coordinate} options={goalOptions}></Circle></>
          )}
          {/*<Circle center={center} options={goalOptions}></Circle>*/}
        </GoogleMap>
      </LoadScript>

      <Container textAlign="center">
        <br />
        <br />
        <br />
        <Image circular size="large" centered src={imageUrl1} style={{ width: 300  }} onClick={() => {
          console.log('No.1')
          setShowImage1("images/fountain.jpg")
        }}></Image><br />
        <Image circular size="large" centered src={imageUrl2} style={{ width: 300 }} onClick={() => {
          console.log('No.2')
          setShowImage2("images/lawn.jpg")
        }}></Image><br />
        <Image circular size="large" centered src={imageUrl3} style={{ width: 300 }} onClick={() => {
          console.log('No.3')
          setShowImage3("images/publicSquare.jpg")
        }}></Image><br />
        <Image circular size="large" centered src={imageUrl4} style={{ width: 300 }} onClick={() => {
          console.log('No.4')
          setShowImage4("images/animal.jpg")
        }}></Image><br />
        <Image circular size="large" centered src={imageUrl5} style={{ width: 300 }} onClick={() => {
          console.log('No.5')
          setShowImage5("images/observationTower.jpg")
        }}></Image><br />
        <Image circular size="large" centered src={imageUrl6} style={{ width: 300 }} onClick={() => {
          console.log('No.6')
          setShowImage6("images/garden.jpg")
        }}></Image><br />

      </Container>
      <Footer />
    </Container>
  );
};