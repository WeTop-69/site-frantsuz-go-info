import React, { useState, useEffect } from "react";
import car from '../image/pngwing 64.png'
import carDesi from '../image/pngwing 59.png'
import Loader from './loader';

import { child, get, getDatabase, onValue, ref, set} from "firebase/database";
let infocar3 = []
    let i =[]

function BlockCar() {
  const dbRef3 =  getDatabase();
    const btnInfo25 = ref(dbRef3, 'driver/E347YK/driverName');
    const [infocar, setInfo] = useState(infocar3)
    onValue(btnInfo25, (snapshot) => {
        let infocar2 = snapshot.val()
        let infocar4 = Object.values(infocar2)
        if (i == infocar2){
        } else {
            i = infocar2
            setTimeout(() => {
                setInfo(infocar3 = infocar2);
            }, 2000);
        }
    });
  const [loaded, setLoaded] = useState(false);  
  useEffect(() => {
    setLoaded(true);
  });
  const [namecar, cinstnam] = useState('');
  const dbRef = getDatabase();
  const btnInfo2 = ref(dbRef, 'cars/E347YK/carNumber');
  onValue(btnInfo2, (snapshot) => {
    const namecar = snapshot.val();
    document.getElementById('namber').innerHTML = namecar;
  })
  const dbRefBtn =getDatabase();
  const btnInfo = ref(dbRefBtn, 'cars/E347YK/free');
  onValue(btnInfo, (snapshot) => {
    const RefBtn = snapshot.val();
    if (RefBtn == false){
      const her2 = "НЕДОСТУПНА"
      var cdo = document.querySelector('#carDesOne');
      cdo.className = 'image-car none';
      var cd = document.querySelector('#carDesTwo');
      cd.className = 'image-car block';
      var bcc = document.querySelector('#blockCarColor');
      bcc.className = 'BlockCar black';
      var nam = document.querySelector('#namber');
      nam.className = 'item-block namber text-color';
      document.getElementById('infoCar').innerHTML = her2;
    } else{
      const her2 = "ДОСТУПНА"
      var cdo = document.querySelector('#carDesOne');
      cdo.className = 'image-car block';
      var cd = document.querySelector('#carDesTwo');
      cd.className = 'image-car none';
      var bcc = document.querySelector('#blockCarColor');
      bcc.className = 'BlockCar';
      var nam = document.querySelector('#namber');
      nam.className = 'item-block namber';
      document.getElementById('infoCar').innerHTML = her2;
    }
  })
  function btnInfoCar() {
  const dbRefTwo = ref(getDatabase());
  get(child(dbRefTwo, `cars/E347YK/free`)).then((snapshot) => {
    const btnInfoOne = snapshot.val();
    if (btnInfoOne == true){
      const db = getDatabase();
      const her2 = "НЕДОСТУПНА"
      var cdo = document.querySelector('#carDesOne');
      cdo.className = 'image-car none';
      var cd = document.querySelector('#carDesTwo');
      cd.className = 'image-car block';
      var bcc = document.querySelector('#blockCarColor');
      bcc.className = 'BlockCar black';
      var nam = document.querySelector('#namber');
      nam.className = 'item-block namber text-color';
      document.getElementById('infoCar').innerHTML = her2;
      set(ref(db, 'cars/E347YK'), {
        carNumber: "E347YK",
        driverName: infocar,
        free : false,
        model: "Lada Granta чёрная",
      });
    } else {
      const db = getDatabase();
      const her2 = "ДОСТУПНА"
      var cdo = document.querySelector('#carDesOne');
      cdo.className = 'image-car block';
      var cd = document.querySelector('#carDesTwo');
      cd.className = 'image-car none';
      var bcc = document.querySelector('#blockCarColor');
      bcc.className = 'BlockCar';
      var nam = document.querySelector('#namber');
      nam.className = 'item-block namber';
      document.getElementById('infoCar').innerHTML = her2;
      set(ref(db, 'cars/E347YK'), {
        carNumber: "E347YK",
        driverName: infocar,
        free : true,
        model: "Lada Granta чёрная",
        }); 

        const dbRef1 = ref(getDatabase());
        let btnInfo1 = []
        let btnInfo12 = []
        let btnInfo33 = {}
        get(child(dbRef1, `trips/current`)).then((snapshot) => {
          btnInfo1 = Object.values(snapshot.val());
        })
        get(child(dbRef1, `trips/completed`)).then((snapshot) => {
          btnInfo12 = Object.values(snapshot.val());
        })
        setTimeout(() => {
          let current = btnInfo1
          let completed = btnInfo12
          let huy = current.filter((her44) => her44.carNumber == 'E347YK')[0]
          completed.push(huy)
          current.splice(current.indexOf(huy), 1)
          set(ref(db, 'trips'), { completed, current}); 
      }, 1000);
      }
    })
  };

  if (!loaded) return <Loader />;
   return (
    <div className="rast-blok">
        <div id="blockCarColor" className="BlockCar">
            <div className="block-car-btn">
              <img id="carDesOne" className="image-car none" src={car} alt="" />
              <img id="carDesTwo" className="image-car " src={carDesi} alt="" />
              <span id='namber' className='item-block namber'>K999TA</span>
            </div>
        </div>
        <div onClick={btnInfoCar} className="filter-status-car">
          <div id="infoCar" className="item-info"></div>
        </div>
    </div>
  );
}

export default BlockCar;