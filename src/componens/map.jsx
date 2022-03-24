import { async } from "@firebase/util";
import { child, get, getDatabase, onValue, ref, set} from "firebase/database";
import React, { Suspense, useEffect, useState } from 'react';
import { YMaps, Map, Polygon, SearchControl} from 'react-yandex-maps';
import Loader from "./loader";
import sertch from '../image/Vector (2).svg'

function MapY() {
      const dbRef =  getDatabase();
    let her = []
    let her2 = []
    let her5 = []
    let her4 = []
    let her6 = []
    let her7 = []
    let her8 = []
    let her9 = []
    let her10 = []
    const btnInfo2 = ref(dbRef, 'zones/4/simpleLatLngList');
    onValue(btnInfo2, (snapshot) => {
      her = snapshot.val().map(e=>{
        return Object.values(e);
      });
    });
    const btnInfo7 = ref(dbRef, 'zones/3/simpleLatLngList');
    onValue(btnInfo7, (snapshot) => {
      her7 = snapshot.val().map(e=>{
        return Object.values(e);
      });
    });
    const btnInfo1 = ref(dbRef, 'zones/5/simpleLatLngList');
    onValue(btnInfo1, (snapshot) => {
      her2 = snapshot.val().map(e=>{
        return Object.values(e);
      });
    });
    const btnInfo4 = ref(dbRef, 'zones/6/simpleLatLngList');
    onValue(btnInfo4, (snapshot) => {
      her4 = snapshot.val().map(e=>{
        return Object.values(e);
      });
    });
    const btnInfo5 = ref(dbRef, 'zones/7/simpleLatLngList');
    onValue(btnInfo5, (snapshot) => {
      her5 = snapshot.val().map(e=>{
        return Object.values(e);
      });
    });
    const btnInfo6 = ref(dbRef, 'zones/8/simpleLatLngList');
    onValue(btnInfo6, (snapshot) => {
      her6 = snapshot.val().map(e=>{
        return Object.values(e);
      });
    });
    const btnInfo8 = ref(dbRef, 'zones/2/simpleLatLngList');
    onValue(btnInfo8, (snapshot) => {
      her8 = snapshot.val().map(e=>{
        return Object.values(e);
      });
    });
    const btnInfo9 = ref(dbRef, 'zones/1/simpleLatLngList');
    onValue(btnInfo9, (snapshot) => {
      her9 = snapshot.val().map(e=>{
        return Object.values(e);
      });
    });
    const btnInfo10 = ref(dbRef, 'zones/0/simpleLatLngList');
    onValue(btnInfo10, (snapshot) => {
      her10 = snapshot.val().map(e=>{
        return Object.values(e);
      });
    });
    let POLYGON_COORDS = [her, her2, her5, her4, her6];
    let POLYGON_COORDS2 = [her7];
    let POLYGON_COORDS3 = [her8];
    let POLYGON_COORDS4 = [her9];
    let POLYGON_COORDS5 = [her10];
     const mapState = { center: [55.758530, 37.839314], zoom: 11, };
     const [asyncData, setAsyncData] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setAsyncData("something");
        }, 4000);
    });
  return asyncData ?
    <Suspense fallback={<Loader/> }>
    <YMaps>
        <Map className='map' state={mapState}>
          <Polygon
            geometry={POLYGON_COORDS}
            options={{
              fillColor: "#f70000",
              opacity: 0.3,
            }} 
            properties={{
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
            }}
          />
          <Polygon
            geometry={POLYGON_COORDS2}
            options={{
              fillColor: "#ff00c8",
              opacity: 0.3,
              zIndex: 8,
              interactivityModel: 'default#devMap'
            }}
            properties={{
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
            }}
          />
          <Polygon
            geometry={POLYGON_COORDS3}
            options={{
              fillColor: "00b3ff",
              opacity: 0.3,
            }}
          />
          <Polygon
            geometry={POLYGON_COORDS4}
            options={{
              fillColor: "04ff00",
              opacity: 0.3,
            }}
          />
          <Polygon
            geometry={POLYGON_COORDS5}
            options={{
              fillColor: "FFFF00",
              opacity: 0.3,
            }}
          />
        </Map>
    </YMaps>
    </Suspense>:
    <div></div>
};
export default MapY;