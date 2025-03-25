import React, { useState } from 'react';
import '../css/brochure.css';
import contact from '../../../../data/layouts/contact';

const Brochure = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section
      className="brochure my-md-4 py-4 lazy-bg skeleton loaded"
      id="brochure"
      style={{
        backgroundImage: 'url("./images/Section02-01-8.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="right-bg">
        <div className="container">
          <div className="wrap">
            <div className="row">
              <div className="brochure-left col-lg-6 col-12">
                <div className="brochure-video mt-lg-5 lazy-bg skeleton loaded">
                  {!isPlaying ? (
                    <div
                      style={{
                        backgroundImage:
                          'url("https://hbr.edu.vn/storage/images/2024/01/23/youtube-gYzPpD_cgHg.webp")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '640px',
                        height: '360px',
                        maxWidth: '100%',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        position: 'relative',
                      }}
                      onClick={() => setIsPlaying(true)}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          background: 'rgba(0, 0, 0, 0.6)',
                          borderRadius: '50%',
                          width: '50px',
                          height: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img
                          src="./images/icons/play.png"
                          alt="Play icon"
                          loading="lazy"
                          style={{
                            width: '50px',
                            height: '50px',
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <iframe
                      width="100%"
                      height="450px"
                      src="https://www.youtube.com/embed/gYzPpD_cgHg?autoplay=1"
                      title="YouTube Video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      style={{
                        width: '640px',
                        height: '360px',
                        maxWidth: '100%',
                        borderRadius: '8px',
                        cursor: 'pointer',
                      }}
                    />
                  )}
                </div>
              </div>
              <div className=" brochure-right col-lg-6 col-12">
                <div className="ps-lg-5 ms-lg-3 right">
                  <h1 className="default-box-title">{contact.name}</h1>
                  <p className="slogan">
                    <strong>Chuyển hóa Lãnh đạo - Kiến tạo tương lai</strong>
                  </p>
                  <div className="larry-page-quote position-relative">
                    <div className="quote">
                      “Thành hay bại đều phụ thuộc vào năng lực lãnh đạo. Lãnh
                      đạo thay đổi thì mọi thứ thay đổi”
                    </div>
                    <strong className="position-absolute">
                      Mr. Tony Dzung
                    </strong>
                  </div>
                  <div className="mb-3 text">
                    Với sứ mệnh chuyển hóa những nhà lãnh đạo, Trường doanh nhân
                    HBR luôn tiên phong cập nhật tinh hoa tri thức quốc tế giúp
                    chủ doanh nghiệp Việt Nam nâng tầm năng lực quản trị, kiến
                    tạo tầm nhìn dài hạn 5-10-20 năm cho tổ chức.
                  </div>
                  <div>
                    <a href="/no-data" title="" className="detail me-2">
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
