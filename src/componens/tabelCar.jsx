import React, { useEffect, useState } from 'react';
import BlockCar from './blockCar';
import Car2 from './car2';
import Car3 from './car3';
import Car4 from './car4';
import Car5 from './car5';
import KallCar from './kallCar';
import Loader from './loader';

function TabelCar(props, data) {
  const [loaded, setLoaded] = useState(false);  
  useEffect(() => {
    setLoaded(true);
  });

  if (!loaded) return <Loader />;

  return (
    <div className="tabel-car">
        <div className='taxt-tebel-car'>СПИСОК АВТОМОБИЛЕЙ:</div>
        <div id='tabelBlockCar' className="tabel-block-car">
          <div className="tabel-block-car-position">
            <BlockCar/>
            <KallCar/>
            <Car2/>
            <Car3/>
            <Car4/>
            <Car5/>
          </div>
        </div>
    </div>
  );
}

export default TabelCar;