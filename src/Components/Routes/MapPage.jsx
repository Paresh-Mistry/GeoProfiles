import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Layoutwrapper } from '../Layout/Layoutwrapper';
import { useParams } from 'react-router-dom';


const MapPage = () => {
  let { long , lat } = useParams()

  const position = [long, lat];
  const zoomLevel = 13;

  return (
    <Layoutwrapper>
      <div className='h-[100vh] z-10'>
        <MapContainer center={position} zoom={zoomLevel} className='h-full w-full z-10'>
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
    </Layoutwrapper>
  );
};

export default MapPage;
