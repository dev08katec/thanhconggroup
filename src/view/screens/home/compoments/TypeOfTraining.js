import React from 'react';
import '../css/training.css';

const trainingTypes = [
  {
    title: 'Seminar',
    link: '/no-data',
    image: './images/lao-dong-chuyen-nghiep-320x200.jpg',
  },
  {
    title: 'Workshop',
    link: '/no-data',
    image: './images/dv2.jpg',
  },
  {
    title: 'Đào tạo In-House',
    link: '/no-data',
    image: './images/unnamed.jpg',
  },
  {
    title: 'Tư vấn Doanh Nghiệp',
    link: '/no-data',
    image: './images/slide.png',
  },
];

const TypeOfTraining = () => {
  return (
    <section
      className="types-of-training py-md-5 lazy-bg skeleton loaded"
      data-bg="url(templates/kaizen/images/types-of-training.webp)"
      style={{
        backgroundImage:
          "url('/templates/kaizen/images/types-of-training.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <h2>loại hình đào tạo</h2>

        <div className="row">
          {trainingTypes.map((trainingType, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 col-12">
              <h3 className="text-center">
                <a href={trainingType.link} title={trainingType.title}>
                  {trainingType.title}
                </a>
              </h3>
              <div className="text-center position-relative lazy-container">
                <div
                  className="skeleton"
                  style={{ height: '300px', display: 'none' }}
                ></div>
                <img
                  data-src={trainingType.image}
                  className="mw-100 lazy-img loaded"
                  alt=""
                  loading="lazy"
                  src={trainingType.image}
                  style={{ height: '250px' }}
                />
                <div className="detail text-center">
                  <div className="opacity-75 bg-white py-3">
                    <a className="btn" href="/seminar" title="seminar">
                      <img
                        data-src="/templates/kaizen/icons/list-icon-white.png"
                        className="mw-100"
                        alt=""
                        loading="lazy"
                      />
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-md-5">
          <span className="btn" onclick="jump('enrollment-form')">
            Đăng ký nhận tư vấn
          </span>
        </div>
      </div>
    </section>
  );
};

export default TypeOfTraining;
