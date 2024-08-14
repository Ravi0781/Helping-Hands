import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ coordinates }) => {
  
    return (
      <>
    <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          A marker with coordinates: <br /> Latitude: {coordinates[0]} <br /> Longitude: {coordinates[1]}
        </Popup>
      </Marker>
    </MapContainer>
    </>
    );
};

export default Map;
