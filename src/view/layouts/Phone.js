import React from 'react';
import './css/phone.css';

const Phone = () => {
  return (
    <div className="fixed-right d-none d-md-block">
      <div className="item phone-ring">
        <a href="tel:082.999.6886" title="">
          <img
            src="./images/icons/phone-call-1-300x300.png"
            alt="Hotline"
            className="mw-100"
          />
        </a>
      </div>
    </div>
  );
};

export default Phone;
