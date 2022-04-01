import { ref, onValue, getDatabase, connectDatabaseEmulator } from 'firebase/database';
import React, { Suspense, useEffect, useState } from 'react';
import InfoPrase from './infoPrase';
let i =[];
let infocar3 = []
function IPT() {
    const dbRef =  getDatabase();
    const btnInfo2 = ref(dbRef, 'trips/current');
    const [infocar, setInfo] = useState(infocar3)
    onValue(btnInfo2, (snapshot) => {
        let infocar2 = snapshot.val()
        let infocar4 = Object.values(infocar2)
        if (i.length == infocar4.length){
        } else {
            i = infocar4
            setTimeout(() => {
                setInfo(infocar3 = infocar4);
            }, 2000);
        }
    });
    console.log(infocar)
  return (
    <div id='east' className="">
        {infocar.map(post =>
        <InfoPrase post={post} key={post.id}/>  
        )}
    </div>
  )}
export default IPT;