import { ref, onValue, getDatabase } from 'firebase/database';
import React, { Suspense, useEffect, useState } from 'react';
import InfoPrase from './infoPrase';

let infocar3 = []
    let i =[]

function IPTA() {
    const dbRef =  getDatabase();
    const btnInfo2 = ref(dbRef, 'trips/completed');
    const [infocar, setInfo] = useState(infocar3)
    onValue(btnInfo2, (snapshot) => {
        let infocar2 = snapshot.val()
        let infocar4 = Object.values(infocar2)
        if (i.length == infocar4.length){
        } else {
            i = infocar4
            setTimeout(() => {
                setInfo(infocar3 = infocar4);
            }, 5000);
        }
    });
    console.log(infocar)
  return (
    <div id='netu' className="none">
        {infocar.map(post =>
        <InfoPrase post={post} key={post.b}/>  
        )}
    </div>
  )}
export default IPTA;