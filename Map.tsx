import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { GoogleMap, LoadScript, Marker, Polyline } from "https://cdn.skypack.dev/@react-google-maps/api?dts";
import { HomeViewModel } from "./src/view_model/HomeViewModel.ts";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 35.9507182,
  lng: 136.1825219,
};

const routePath = [
  {lat: 35.9522468, lng: 136.1754899},
  {lat: 35.9507182, lng: 136.1825219}
]

const Map = () => {
  const viewModel = new HomeViewModel();
  // このエラーは無視しておｋ
  return (
    <LoadScript googleMapsApiKey="AIzaSyA21hP2aaQA54UNFQFq8he2G0REvzX6Vd4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
        <Marker position={center}></Marker>
        <Polyline path={routePath}></Polyline>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;