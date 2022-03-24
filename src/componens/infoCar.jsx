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
function InfoCar(props, data) {
  function sayHi() {
    var bb = document.querySelector('#loader');
    bb.className = 'loader-position none';
  }
  setTimeout(sayHi, 7000);
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
            <div className="btn-histori">
              <Link to={`/firebase-taxi-app-info/`}>
                <img className='histori-icon' src={histori}/>
                <div className='btn-text'>
                  <div className="text-histori">история заказов</div>
                </div>
              </Link>
            </div>
            <div className="btn-filter">
              <img className='filter-icon' src={filter}/>
              <div className='btn-text'>фильтр</div>
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
          <div className="table-block-info">
            <IPT/>
          </div>
        </div>
    </div>
  );
}

export default InfoCar;
