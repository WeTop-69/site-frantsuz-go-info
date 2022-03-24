import React, { Suspense, useEffect, useState } from 'react';


function InfoPrase(props) {
    var Jan02_1970 = new Date(props.post.date);
    let year = Jan02_1970.getFullYear()
    let month = Jan02_1970.getMonth()
    let day = Jan02_1970.getDate()
    let hours = Jan02_1970.getHours(); // 10
    let min = Jan02_1970.getMinutes(); // 0
    let sek = Jan02_1970.getSeconds(); // 0
    var her = String(year + "."+ month + "." +day + " "+ hours + '.'+ min + '.' + sek)
  return (
    <div className="info-prise">
        <div className="item-info-prise namber-prise">{props.post.carNumber}</div>
        <div className="item-info-prise namber-prise date">{her}</div>
        <div className="item-info-prise adres">{props.post.address}</div>
        <div className="item-info-prise prise">{props.post.price}</div>
    </div>
  )};
export default InfoPrase;