import React from 'react';
import '../css/statistics.css';
import data from '../../../../data/layouts/statistics';

const Statistics = () => {
  return (
    <section
      className="section-statistics lazy-bg skeleton loaded"
      data-bg="url(./images/statistics.webp)"
      style={{
        backgroundImage: 'url("./images/statistics.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="box-title text-center mb-4">
          NHỮNG CON SỐ ĐÁNG TỰ HÀO
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-3 col-6 mt-md-3">
              <div className="text-center">
                <img
                  src={item.image}
                  data-aos="zoom-out"
                  className="mw-100 aos-init aos-animate"
                  alt={item.label}
                  loading="lazy"
                />
              </div>
              <p className="description">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
