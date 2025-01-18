import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


const MapPage = () => {
  const position = [18.9944, 72.8329]; 
  const zoomLevel = 13;

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer center={position} zoom={zoomLevel} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={position} icon={new L.Icon.Default()}>
          <Popup>
            A simple marker on the map!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapPage;
