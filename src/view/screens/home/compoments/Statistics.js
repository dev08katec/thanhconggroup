import React from 'react';
import '../css/statistics.css';

const statisticData = [
  { label: 'CHỦ DOANH NGHIỆP', link: './images/number1.webp' },
];

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
          <div className="col-lg-3 col-md-3 col-6">
            <div className="text-center">
              <img
                src="./images/number1.webp"
                data-aos="zoom-out"
                className="mw-100 aos-init aos-animate"
                alt="CHỦ DOANH NGHIỆP"
                loading="lazy"
              />
            </div>
            <p className="description">CHỦ DOANH NGHIỆP</p>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="text-center">
              <img
                src="./images/number2.webp"
                data-aos="zoom-out"
                className="mw-100 aos-init aos-animate"
                alt="CHUYÊN GIA TRONG NƯỚC VÀ QUỐC TẾ"
                loading="lazy"
              />
            </div>
            <p className="description">
              CHUYÊN GIA TRONG NƯỚC <br />
              VÀ QUỐC TẾ
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="text-center">
              <img
                src="./images/number4.webp"
                data-aos="zoom-out"
                className="mw-100 aos-init aos-animate"
                alt="THÀNH VIÊN CỘNG ĐỒNG BUSINESS MASTER"
                loading="lazy"
              />
            </div>
            <p className="description">
              THÀNH VIÊN CỘNG ĐỒNG <br />
              BUSINESS MASTER
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-6">
            <div className="text-center">
              <img
                src="./images/number3.webp"
                data-aos="zoom-out"
                className="mw-100 aos-init aos-animate"
                alt="CHƯƠNG TRÌNH ĐÀO TẠO CHUYÊN SÂU VỀ LÃNH ĐẠO VÀ QUẢN TRỊ"
                loading="lazy"
              />
            </div>
            <p className="description">
              CHƯƠNG TRÌNH ĐÀO TẠO
              <br />
              CHUYÊN SÂU VỀ
              <br />
              LÃNH ĐẠO VÀ QUẢN TRỊ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
