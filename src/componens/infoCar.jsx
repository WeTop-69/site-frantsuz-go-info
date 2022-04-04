import React, { Component, useState } from 'react';
import logo from '../image/Group 1024.svg'
import TabelCar from './tabelCar';
import Loader from './loader';
import IPT from './infoPriseTable';
import IPTA from './infoPriseTableAktive';
import dow from '../image/downloading_black_24dp.svg'
import PDFFile from './pdffilecreate';
import { getDatabase, onValue, ref } from 'firebase/database';

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
  let timeDate = 1640984400000
  let timeDate2 = 33545048460000
  let myDate = 0
  let myTime = 0
  setTimeout(() => {
  let date1 = document.getElementById("date-inpt1");
  let time1 = document.getElementById("time-inpt1");
  date1.oninput = function() {
    myDate = date1.value
    let her4545 = myDate + ':'+ myTime
    let chlen = Date.parse(String(her4545))
    timeDate = chlen
  };
  time1.oninput = function() {
    myTime = time1.value
    let her4545 = myDate + ':'+ myTime
    let chlen = Date.parse(String(her4545))
    timeDate = chlen
  };


  let myDate1 = 0
  let myTime1 = 0
  let date2 = document.getElementById("date-inpt2");
  let time2 = document.getElementById("time-inpt2");
  date2.oninput = function() {
    myDate1 = date2.value
    let her4545 = myDate1 + ':'+ myTime1
    let chlen = Date.parse(String(her4545))
    timeDate2 = chlen
  };
  time2.oninput = function() {
    myTime1 = time2.value
    let her4545 = myDate1 + ':'+ myTime1
    let chlen = Date.parse(String(her4545))
    timeDate2 = new Date(chlen)
  };

  }, 2000);
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
          <div className="name-page-dunload">
            <div className="name-page">История заказов</div>
            <div className='inpt-date-time'>
              <div className='data-ot-do'>ОТ:</div>
              <input id="date-inpt1" type="date" className='inpt-date'/>
              <input id="time-inpt1" type="time" className='inpt-time'/>
            </div>
            <div className='inpt-date-time'>
              <div className='data-ot-do'>ДО:</div>
              <input id="date-inpt2" type="date" className='inpt-date'/>
              <input id="time-inpt2" type="time" className='inpt-time'/>
            </div>
            <div onClick={(e) => PDFFile(timeDate, timeDate2)} className="dounload-bbtn">
              <img className='img-dow' src={dow} alt="" />
            </div>
          </div>
          <div className="type-conteiner">
            <div className="type-name-info">
              <div className="type-info namber-prise">НОМЕР</div>
              <div className="type-info namber-prise">ДАТА/ВРЕМЯ</div>
              <div className="type-info namber-prise nameDR">ФИО</div>
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
