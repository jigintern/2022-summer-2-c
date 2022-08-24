import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { GoogleMap, LoadScript, Polyline, Circle } from "https://cdn.skypack.dev/@react-google-maps/api?dts";
import { HomeViewModel } from "./src/view_model/HomeViewModel.ts";

const containerStyle = {
  width: "100vw",
  height: "90%",
};

const center = {
  lat: 35.9507182,
  lng: 136.1825219,
};

const options = {
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

const routePath2 = [
  //35.951412,136.185552

  {lat: 35.953744, lng: 136.183777},
  {lat: 35.950765, lng: 136.183176},
  {lat: 35.950913, lng: 136.183466},
  {lat: 35.951182, lng: 136.183594},
  {lat: 35.951087, lng: 136.183755},
  {lat: 35.950817, lng: 136.183627},
  {lat: 35.950678, lng: 136.183648},
  {lat: 35.950236, lng: 136.184034},
  {lat: 35.950218, lng: 136.184356},
  {lat: 35.950405, lng: 136.184635},
  {lat: 35.950700, lng: 136.184941},
  {lat: 35.951542, lng: 136.185193},
  {lat: 35.951677, lng: 136.185155},
  {lat: 35.951733, lng: 136.184940},
  {lat: 35.951655, lng: 136.184753},
  {lat: 35.951742, lng: 136.184737},
  {lat: 35.951759, lng: 136.184330},
  {lat: 35.951994, lng: 136.184393},
  {lat: 35.952072, lng: 136.184549},
  {lat: 35.952524, lng: 136.184640},
  {lat: 35.952402, lng: 136.185219},
  {lat: 35.952181, lng: 136.185670},
  {lat: 35.951950, lng: 136.185649},
  {lat: 35.951412, lng: 136.185552}
  
]

const Map = (prop) => {
  const viewModel = prop.viewModel;
  console.log('マップ作ったナリ');
  console.log(viewModel);
  console.log(viewModel.route);
  // このエラーは無視しておｋ
  return (
    <LoadScript googleMapsApiKey="AIzaSyA21hP2aaQA54UNFQFq8he2G0REvzX6Vd4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
        <Circle center={center} options={options}></Circle>
        {/*viewModel.route != null*/ true
          ? <Polyline path={routePath2}></Polyline>
          : <></>
        }
        </GoogleMap>
    </LoadScript>
  );
};

export default Map;