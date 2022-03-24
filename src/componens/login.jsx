import React, { Component } from 'react';
import logo from '../image/Group 1024.svg'
import logoTwo from '../image/Group 1023.svg'
import { Link } from 'react-router-dom';

function Login(e) {
    function clickBtnLogin() {
        let login = document.getElementById("logID").value;
        let pass = document.getElementById("passID").value;
        if (login == "123" && pass == "123"){
            window.location.assign('site-frantsuz-go/firebase-taxi-app');
            e.preventDefault()
        } else {
            
        }
    }
  return (
    <div className='login-panel'>
        <div className="fran-logo">
            <img className='logo-login' src={logo} alt="" />
        </div>
        <div className="panel-login">
            <div className="text-logo-login-panel">
                <img className="logi-image" src={logoTwo}/>
                <div className="logi-text">АВТОРИЗАЦИЯ</div>
            </div>
            <div className="blok-login">
                <input placeholder='ЛОГИН' id='logID' className='input-logo' type="text" />
                <input placeholder='ПАРОЛЬ' id='passID' className='input-logo' type="password" />
                <button onClick={clickBtnLogin} className='btn-logo'>Войти</button>
            </div>
        </div>
    </div>
  );
}

export default Login;
