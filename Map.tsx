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

const Map = () => {
  const viewModel = new HomeViewModel();
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
        <Polyline path={viewModel.route?.path}></Polyline>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;