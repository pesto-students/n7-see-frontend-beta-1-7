import React, { useState } from 'react';
import {
  Map, TileLayer, Marker, Popup
} from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import MarkerCluster from './MarkerCluster';
import { customMarker } from './CustomMarker';

const position = [8.5241, 76.9366];
const mapStyle = { height: '90vh' };

const LeafletMap = () => {
  const [markers, setMarkers] = useState([
    {
      position: { lng: 76.9366, lat: 8.5241 },
      text: 'Voodoo Doughnut'
    },
    {
      position: { lng: -122.6781446, lat: 45.5225512 },
      text: "Bailey's Taproom"
    },
    {
      position: { lng: -122.67535700000002, lat: 45.5192743 },
      text: 'Barista'
    },
    {
      position: { lng: -122.65596570000001, lat: 45.5199148000001 },
      text: 'Base Camp Brewing'
    }
  ]);

  return (
    <>
      <Map center={position} zoom={10} style={mapStyle} maxZoom={20}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          markers.map((marker) => (
            <Marker
              position={[marker.position.lat, marker.position.lng]}
              icon={customMarker}
            >
              <Popup>
                {marker.text}
              </Popup>
            </Marker>
          ))
        }

        {/* <MarkerCluster markers={markers} /> */}
      </Map>
    </>
  );
};

export default LeafletMap;
