import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { GoogleMap, LoadScript, Polyline, Circle, InfoBox, InfoWindow } from "https://cdn.skypack.dev/@react-google-maps/api?dts";
import { HomeViewModel } from "./src/view_model/HomeViewModel.ts";
import { Container, Grid, Header, Label, Button, Input, Dimmer, Loader, Segment, Divider, Image } from "https://esm.sh/semantic-ui-react@2.1.3";



const containerStyle = {
  width: "100vw",
  height: "90%",
};

const center = {
  lat: 35.9507182,
  lng: 136.1825219,
};

const hotspotOptions = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 10,
  zIndex: 1
}
const startOptions = {
  strokeColor: '#0000FF',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#0000FF',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 20,
  zIndex: 1
}
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

const Map = (prop) => {
  const viewModel: HomeViewModel = prop.viewModel;
  console.log('マップ作ったナリ');
  console.log(viewModel);
  console.log(viewModel.route);
  console.log('マップ作った後');
  // このエラーは無視しておｋ
  return (
    <LoadScript googleMapsApiKey="AIzaSyA21hP2aaQA54UNFQFq8he2G0REvzX6Vd4">
      <GoogleMap
        mapContainerStyle={containerStyle}
//        center={center}
        center={center}
        zoom={16}
      >
        {viewModel.hotspot != null && viewModel.isHotspotVisible
          ? <><Circle center={viewModel.hotspot.coordinate} options={hotspotOptions}>
          </Circle>
            <InfoWindow position={viewModel.hotspot.coordinate}>

          <Image src="/images/lawn.jpg" style={{ width: 80,}}></Image>

          </InfoWindow></>
          : <></>
        }
        
        {viewModel.route != null
          ? <><Polyline path={viewModel.route.path}></Polyline>
            <Circle center={viewModel.route.path[0]} options={startOptions}></Circle>
            <InfoBox
              options={infoboxOptions}
              position={viewModel.route.path[0]}
            >
              <div style={{ backgroundColor: 'blue', opacity: 0.75, padding: 12 }}>
                <div style={{ fontSize: 16, }}>
                  Start
                </div>
              </div>
            </InfoBox>
            <Circle center={viewModel.route.path.slice(-1)[0]} options={goalOptions}></Circle>
            <InfoBox
              options={infoboxOptions}
              position={viewModel.route.path.slice(-1)[0]}
            >
              <div style={{ backgroundColor: 'green', opacity: 0.75, padding: 12 }}>
                <div style={{ fontSize: 16, }}>
                  Goal
                </div>
              </div>
            </InfoBox> </>
          : <></>
        }
        
        </GoogleMap>
    </LoadScript>
  );
};

export default Map;