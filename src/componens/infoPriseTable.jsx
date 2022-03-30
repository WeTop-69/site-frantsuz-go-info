import { ref, onValue, getDatabase } from 'firebase/database';
import React, { Suspense, useEffect, useState } from 'react';
import InfoPrase from './infoPrase';


function IPT() {
    let infocar3 = []
    const dbRef =  getDatabase();
    const btnInfo2 = ref(dbRef, 'trips/current');
    onValue(btnInfo2, (snapshot) => {
        let infocar2 = snapshot.val()
        infocar3 = Object.values(infocar2);
    });
    const [asyncData, setAsyncData] = useState(null);
    const [infocar, setInfo] = useState();
    setTimeout(() => {
        setInfo(infocar3);
    }, 5000);
    useEffect(() => {
        setTimeout(() => {
            setAsyncData("something");
        }, 5000);
    });
  return asyncData ?
    <div id='east' className="">
        {infocar.map(post =>
        <InfoPrase post={post} key={post.id}/>  
        )}
    </div>: <div></div>
  }
export default IPT;