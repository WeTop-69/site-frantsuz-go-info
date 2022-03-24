import { async } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set} from "firebase/database";
import React, { Suspense, useEffect, useState } from 'react';
import { YMaps, Map, Polygon, SearchControl} from 'react-yandex-maps';
import Loader from "./loader";
import sertch from '../image/Vector (2).svg'

function MapY2() {
  const mapState = { center: [55.758530, 37.839314], zoom: 11, };
  return (
    <YMaps>
        <Map id="map" className='map map2' state={mapState}>
        </Map>
    </YMaps>
  )};
export default MapY2;