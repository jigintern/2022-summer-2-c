import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Footer } from "../component/footer.tsx";
import { Container, Grid, Header, Label, Button, Image, Dimmer, Loader, Segment, Divider } from "https://esm.sh/semantic-ui-react@2.1.3";
import { StampRallyViewModel } from "../view_model/StampRallyViewModel.ts";
import { HeaderS } from "../component/Header.tsx";
import { useEffect } from 'https://cdn.skypack.dev/react@17.0.2?dts';
import { GoogleMap, LoadScript, Polyline, Circle, InfoBox } from "https://cdn.skypack.dev/@react-google-maps/api?dts";

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
  
  useEffect(() => {
    console.log('ヒストリー');
  },['key']);

  return (
    <Container textAlign="center">
      <HeaderS />
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
        <Image circular size="medium" src="images/animal.jpg" onClick={()=>{
          viewModel.stampEntrance();
        }}></Image>
        <Image circular size="medium" src="images/fountain.jpg"></Image>
        <Image circular size="medium" src="images/garden.jpg"></Image>
        <Image circular size="medium" src="images/lawn.jpg"></Image>
        <Image circular size="medium" src="images/observation_tower.jpg"></Image>
        <Image circular size="medium" src="images/animal.jpg"></Image>
      </Container>

      <Footer />
    </Container>
  );
};