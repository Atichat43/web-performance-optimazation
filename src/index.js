import React from "react";
import ReactDOM from "react-dom";
import { DeckGL } from '@deck.gl/react'
import { StaticMap } from 'react-map-gl'

const MAPBOX_TOKEN = process.env.MapboxAccessToken

const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const App = () => {
  return (
    <DeckGL initialViewState={initialViewState} controller="true">
      <StaticMap
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
      </StaticMap>
    </DeckGL>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));
