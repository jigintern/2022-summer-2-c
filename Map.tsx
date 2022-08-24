import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { GoogleMap, LoadScript } from "https://cdn.skypack.dev/@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "90%",
};

const center = {
  lat: 35.9522468,
  lng: 136.1754899,
};

const Map = () => {
  // このエラーは無視しておｋ
  return (
    <LoadScript googleMapsApiKey="AIzaSyA21hP2aaQA54UNFQFq8he2G0REvzX6Vd4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;