import React, { useState } from "react";
import ReactDOM from 'react-dom';
import car from '../image/pngwing 64.png'
import carDesi from '../image/pngwing 59.png'
import { child, get, getDatabase, onValue, ref, set} from "firebase/database";


function Car3() {
  const [namecar, cinstnam] = useState('');
  const dbRef = getDatabase();
  const btnInfo2 = ref(dbRef, 'cars/P095YK/carNumber');
  onValue(btnInfo2, (snapshot) => {
    const namecar = snapshot.val();
    document.getElementById('namber3').innerHTML = namecar;
  })
  const dbRefBtn =getDatabase();
  const btnInfo = ref(dbRefBtn, 'cars/P095YK/free');
  onValue(btnInfo, (snapshot) => {
    const RefBtn = snapshot.val();
    if (RefBtn == false){
      const her2 = "НЕДОСТУПНА"
      var cdo = document.querySelector('#carDesOne3');
      cdo.className = 'image-car none';
      var cd = document.querySelector('#carDesTwo3');
      cd.className = 'image-car block';
      var bcc = document.querySelector('#blockCarColor3');
      bcc.className = 'BlockCar black';
      var nam = document.querySelector('#namber3');
      nam.className = 'item-block namber text-color';
      document.getElementById('infoCar3').innerHTML = her2;
    } else{
      const her2 = "ДОСТУПНА"
      var cdo = document.querySelector('#carDesOne3');
      cdo.className = 'image-car block';
      var cd = document.querySelector('#carDesTwo3');
      cd.className = 'image-car none';
      var bcc = document.querySelector('#blockCarColor3');
      bcc.className = 'BlockCar';
      var nam = document.querySelector('#namber3');
      nam.className = 'item-block namber';
      document.getElementById('infoCar3').innerHTML = her2;
    }
  })
  function btnInfoCarFor() {
  const dbRefTwo = ref(getDatabase());
  get(child(dbRefTwo, `cars/P095YK/free`)).then((snapshot) => {
    const btnInfoOne = snapshot.val();
    if (btnInfoOne == true){
      const db = getDatabase();
      const her2 = "НЕДОСТУПНА"
      var cdo = document.querySelector('#carDesOne3');
      cdo.className = 'image-car none';
      var cd = document.querySelector('#carDesTwo3');
      cd.className = 'image-car block';
      var bcc = document.querySelector('#blockCarColor3');
      bcc.className = 'BlockCar black';
      var nam = document.querySelector('#namber3');
      nam.className = 'item-block namber text-color';
      document.getElementById('infoCar3').innerHTML = her2;
      set(ref(db, 'cars/P095YK'), {
        carNumber: "P095YK",
        driverName: "Денис",
        free : false,
        model: "Lada Granta серая",
      });
    } else {
      const db = getDatabase();
      const her2 = "ДОСТУПНА"
      var cdo = document.querySelector('#carDesOne3');
      cdo.className = 'image-car block';
      var cd = document.querySelector('#carDesTwo3');
      cd.className = 'image-car none';
      var bcc = document.querySelector('#blockCarColor3');
      bcc.className = 'BlockCar';
      var nam = document.querySelector('#namber3');
      nam.className = 'item-block namber';
      document.getElementById('infoCar3').innerHTML = her2;
      set(ref(db, 'cars/P095YK'), {
        carNumber: "P095YK",
        driverName: "Денис",
        free : true,
        model: "Lada Granta серая",
        }); 
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
        <div id="blockCarColor3" onClick={infoBlockCarFree} className="BlockCar">
            <div className="block-car-btn">
              <img id="carDesOne3" className="image-car none" src={car} alt="" />
              <img id="carDesTwo3" className="image-car " src={carDesi} alt="" />
              <span id='namber3' className='item-block namber'>K999TA</span>
            </div>
        </div>
        <div onClick={btnInfoCarFor} className="filter-status-car">
          <div id="infoCar3" className="item-info"></div>
        </div>
    </div>
    );
  }

export default Car3;