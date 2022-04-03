import React, { useState } from "react";
import ReactDOM from 'react-dom';
import car from '../image/pngwing 64.png'
import carDesi from '../image/pngwing 59.png'
import { child, get, getDatabase, onValue, ref, set} from "firebase/database";
let infocar3 = []
    let i =[]

function Car4() {
  const dbRef3 =  getDatabase();
  const btnInfo25 = ref(dbRef3, 'driver/P769YT/driverName');
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
  const [namecar, cinstnam] = useState('');
  const dbRef = getDatabase();
  const btnInfo2 = ref(dbRef, 'cars/P769YT/carNumber');
  onValue(btnInfo2, (snapshot) => {
    const namecar = snapshot.val();
    document.getElementById('namber4').innerHTML = namecar;
  })
  const dbRefBtn =getDatabase();
  const btnInfo = ref(dbRefBtn, 'cars/P769YT/free');
  onValue(btnInfo, (snapshot) => {
    const RefBtn = snapshot.val();
    if (RefBtn == false){
      const her2 = "НЕДОСТУПНА"
      var cdo = document.querySelector('#carDesOne4');
      cdo.className = 'image-car none';
      var cd = document.querySelector('#carDesTwo4');
      cd.className = 'image-car block';
      var bcc = document.querySelector('#blockCarColor4');
      bcc.className = 'BlockCar black';
      var nam = document.querySelector('#namber4');
      nam.className = 'item-block namber text-color';
      document.getElementById('infoCar4').innerHTML = her2;
    } else{
      const her2 = "ДОСТУПНА"
      var cdo = document.querySelector('#carDesOne4');
      cdo.className = 'image-car block';
      var cd = document.querySelector('#carDesTwo4');
      cd.className = 'image-car none';
      var bcc = document.querySelector('#blockCarColor4');
      bcc.className = 'BlockCar';
      var nam = document.querySelector('#namber4');
      nam.className = 'item-block namber';
      document.getElementById('infoCar4').innerHTML = her2;
    }
  })
  function btnInfoCarTwo() {
  const dbRefTwo = ref(getDatabase());
  get(child(dbRefTwo, `cars/P769YT/free`)).then((snapshot) => {
    const btnInfoOne = snapshot.val();
    if (btnInfoOne == true){
      const db = getDatabase();
      const her2 = "НЕДОСТУПНА"
      var cdo = document.querySelector('#carDesOne4');
      cdo.className = 'image-car none';
      var cd = document.querySelector('#carDesTwo4');
      cd.className = 'image-car block';
      var bcc = document.querySelector('#blockCarColor4');
      bcc.className = 'BlockCar black';
      var nam = document.querySelector('#namber4');
      nam.className = 'item-block namber text-color';
      document.getElementById('infoCar4').innerHTML = her2;
      set(ref(db, 'cars/P769YT'), {
        carNumber: "P769YT",
        driverName: "Даня",
        free : false,
        model: "Lada Granta жёлтая",
      });
    } else {
      const db = getDatabase();
      const her2 = "ДОСТУПНА"
      var cdo = document.querySelector('#carDesOne4');
      cdo.className = 'image-car block';
      var cd = document.querySelector('#carDesTwo4');
      cd.className = 'image-car none';
      var bcc = document.querySelector('#blockCarColor4');
      bcc.className = 'BlockCar';
      var nam = document.querySelector('#namber4');
      nam.className = 'item-block namber';
      document.getElementById('infoCar4').innerHTML = her2;
      set(ref(db, 'cars/P769YT'), {
        carNumber: "P769YT",
        driverName: "Даня",
        free : true,
        model: "Lada Granta жёлтая",
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
          let huy = current.filter((her44) => her44.carNumber == 'P769YT')[0]
          completed.push(huy)
          current.splice(current.indexOf(huy), 1)
          set(ref(db, 'trips'), { completed, current}); 
      }, 1000);
      }
    })
  }
  var blocBlac = false;
  function infoBlockCarFree() {
    if (blocBlac == false){
      var bb = document.querySelector('#blockBlack');
      bb.className = 'block-black block';
      var ibc = document.querySelector('#infoBlocCar');
      ibc.className = 'info-bloc-car block';
      blocBlac = true
    } else{
      var bb = document.querySelector('#blockBlack');
      bb.className = 'block-black';
      var ibc = document.querySelector('#infoBlocCar');
      ibc.className = 'info-bloc-car';
      blocBlac = false
    }
  }
     return (
      <div className="rast-blok">
        <div id="blockCarColor4" className="BlockCar">
            <div className="block-car-btn">
              <img id="carDesOne4" className="image-car none" src={car} alt="" />
              <img id="carDesTwo4" className="image-car " src={carDesi} alt="" />
              <span id='namber4' className='item-block namber'>K999TA</span>
            </div>
        </div>
        <div onClick={btnInfoCarTwo} className="filter-status-car">
          <div id="infoCar4" className="item-info"></div>
        </div>
    </div>
    );
  }

export default Car4;