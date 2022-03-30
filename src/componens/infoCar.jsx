import React, { Component } from 'react';
import logo from '../image/Group 1024.svg'
import TabelCar from './tabelCar';
import sertch from '../image/Vector (2).svg'
import histori from '../image/Vector (1).svg'
import filter from '../image/Vector.svg'
import { Link } from 'react-router-dom';
import Loader from './loader';
import InfoPrase from './infoPrase';
import IPT from './infoPriseTable';
import IPTA from './infoPriseTableAktive';
function InfoCar(props, data) {
  function sayHi() {
    var bb = document.querySelector('#loader');
    bb.className = 'loader-position none';
  }
  setTimeout(sayHi, 7000);
  function her34() {
      var cdo2 = document.querySelector('#east');
      cdo2.className = 'none';
      var cdo = document.querySelector('#netu');
      cdo.className = '';
      var cdo3 = document.querySelector('#her34');
      cdo3.className = 'btn-histori actv status-active';
      var cdo4= document.querySelector('#her32');
      cdo4.className = 'btn-filter diss ';
      var cdo5= document.querySelector('#text-diss2');
      cdo5.className = 'btn-text text-actv15  text-actv text-actv3 ';
      var cdo6 = document.querySelector('#text-diss');
      cdo6.className = 'text-histori text-actv2 text-diss';
  }
  function her32() {
      var cdo2 = document.querySelector('#east');
      cdo2.className = '';
      var cdo = document.querySelector('#netu');
      cdo.className = 'none';
      var cdo3 = document.querySelector('#her34');
      cdo3.className = 'btn-histori actv';
      var cdo4= document.querySelector('#her32');
      cdo4.className = 'btn-filter diss status-dis';
      var cdo5= document.querySelector('#text-diss2');
      cdo5.className = 'btn-text text-actv15 text-actv text-actv2';
      var cdo6 = document.querySelector('#text-diss');
      cdo6.className = 'text-histori text-actv3';
  }
  return (
    <div className="main">
      <div id='loader' className="loader-position">
        <Loader />
      </div>
        <div className='blok-car'>
        <a href='https://wetop-69.github.io/site-frantsuz-go/' className="name-site">
            <img className='logo' src={logo}/>
          </a>
          <div className="btn-blok">
            <div  onClick={her34} id="her34" className="btn-histori actv">
                <div className='btn-text text-actv'>
                  <div id="text-diss" className="text-histori text-actv3"> завершенные</div>
                </div>
            </div>
            <div onClick={her32} id="her32" className="btn-filter diss status-dis">
              <div id="text-diss2" className='btn-text text-actv15 text-actv text-actv2'>текущие</div>
            </div>
          </div>
          <div className="border">
          <TabelCar/>
          </div>
        </div>
        <div id='blockBlack' className="block-black"></div>
        <div id='infoBlocCar' className="info-bloc-car">
        </div>
        <div className="info-block-conteiner">
          <div className="type-conteiner">
            <div className="type-name-info">
              <div className="type-info namber-prise">НОМЕР</div>
              <div className="type-info namber-prise">ДАТА/ВРЕМЯ</div>
              <div className="type-info adres">АДРЕС</div>
              <div className="type-info prise">ЦЕНА</div>
            </div>
          </div>
          <div id='her333' className="table-block-info">
            <IPT/>
            <IPTA/>
          </div>
        </div>
    </div>
  );
}

export default InfoCar;
