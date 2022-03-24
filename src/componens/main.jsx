import React, { useState } from 'react';
import logo from '../image/Group 1024.svg'
import TabelCar from './tabelCar';
import histori from '../image/Vector (1).svg'
import filter from '../image/Vector.svg'
import Loader from './loader';
import MapY from './map';
import mapIcon from '../image/Group 1025.svg'
import MapY2 from './map2';

function Main(props) { 
  let mapState = false
  function mapBtn() {
    if (mapState == false){
      var cdo = document.querySelector('#map');
      cdo.className = 'map map2 opMap';
      mapState = true
    } else {
      var cdo = document.querySelector('#map');
      cdo.className = 'map map2';
      mapState = false
    }
  }
  let mapState1 = false
  let mapState2 = false
  let mapState3 = false
  let mapState4 = false
  let mapState5 = false
  function color5(){
    if (mapState1 == false){
      var cdo = document.querySelector('#her14');
      cdo.className = 'prise1000-spoler block';
      mapState1 = true
    } else {
      var cdo = document.querySelector('#her14');
      cdo.className = 'prise1000-spoler';
      mapState1 = false
    }
  }
  function color2(){
    if (mapState2 == false){
      var cdo = document.querySelector('#her11');
      cdo.className = 'prise350-spoler block';
      mapState2 = true
      console.log(mapState2)
    } else {
      var cdo = document.querySelector('#her11');
      cdo.className = 'prise350-spoler';
      mapState2 = false
    }
  }
  function color1(){
    if (mapState3 == false){
      var cdo = document.querySelector('#her10');
      cdo.className = 'prise250-spoler block';
      mapState3 = true
    } else {
      var cdo = document.querySelector('#her10');
      cdo.className = 'prise250-spoler';
      mapState3 = false
    }
  }
  function color3(){
    if (mapState4 == false){
      var cdo = document.querySelector('#her12');
      cdo.className = 'prise500-spoler block';
      mapState4 = true
    } else {
      var cdo = document.querySelector('#her12');
      cdo.className = 'prise500-spoler';
      mapState4 = false
    }
  }
  function color4(){
    if (mapState5 == false){
      var cdo = document.querySelector('#her13');
      cdo.className = 'prise750-spoler block';
      mapState5 = true
    } else {
      var cdo = document.querySelector('#her13');
      cdo.className = 'prise750-spoler';
      mapState5 = false
    }
  }
  function sayHi() {
    var bb = document.querySelector('#loader');
    bb.className = 'loader-position none';
  }
  setTimeout(sayHi, 6000);
  return (
    <div className="main">
      <div id='loader' className="loader-position">
        <Loader />
      </div>
        <div className='blok-car'>
          <a className="name-site">
            <img className='logo' src={logo}/>
          </a>
          <div className="btn-blok">
            <div className="btn-histori">
              <a href='https://wetop-69.github.io/site-frantsuz-go/firebase-taxi-app-info'>
                <img className='histori-icon' src={histori}/>
                <div className='btn-text'>
                  <div className="text-histori">история заказов</div>
                </div>
              </a>
            </div>
            <div className="btn-filter">
              <img className='filter-icon' src={filter}/>
              <div className='btn-text'>фильтр</div>
            </div>
          </div>
          <div className="border">
          <TabelCar/>
          </div>
          <div className="color-map">
            <div className="block-color">
              <div id="her10" className="prise250-spoler">250р</div>
              <div onClick={color1} className="color prise250"></div>
            </div>
            <div className="block-color">
              <div id="her11" className="prise350-spoler">350р</div>
              <div onClick={color2} className="color prise350"></div>
            </div>
            <div className="block-color">
              <div id="her12" className="prise500-spoler">500р</div>
              <div onClick={color3} className="color prise500"></div>
            </div>
            <div className="block-color">
              <div id="her13" className="prise750-spoler">750р</div>
              <div onClick={color4} className="color prise750"></div>
            </div>
            <div className="block-color">
              <div id="her14" className="prise1000-spoler">1000р</div>
              <div onClick={color5} className="color prise1000"></div>
            </div>
          </div>
        </div>
        <div id='blockBlack' className="block-black"></div>
        <div id='infoBlocCar' className="info-bloc-car">
        </div>
        <img onClick={mapBtn} className="btn-map" src={mapIcon}/>
        <MapY/>
        <MapY2/>
    </div>
  );
}

export default Main;
