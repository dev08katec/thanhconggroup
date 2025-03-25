import React from 'react';
import './css/topbar.css';
import contact from '../../data/layouts/contact';

const TopBar = () => {
  return (
    <section className="top-bar d-flex">
      <div className="container">
        <div className="row justify-content-between align-items-center h-100 m-0">
          <div className="d-flex align-items-center col-xl-6 col-md-7 col-12 top-bar-first mb-2 mb-xl-0 p-0">
            <span className="me-2">
              <img
                src="./images/icons/phone.png"
                alt="icon-phone"
                className="icon icon-phone"
                width="24"
                height="24"
                loading="lazy"
              />
              <a
                href={`tell ${contact.phone}`}
                title="hotline Trường doanh nhân HBR"
                className="hotline"
              >
                {contact.phone}
              </a>
            </span>

            <span className="me-2 text-white">
              <img
                src="./images/icons/clock.png"
                alt="icon-phone"
                className="icon icon-phone"
                width="24"
                height="24"
                loading="lazy"
              />
              <a href="/" style={{ textTransform: 'uppercase' }}>
                Thời gian làm việc: {contact.time}
              </a>
            </span>
          </div>
          <div className="d-flex justify-content-sm-end col-xl-6 col-md-5 col-12 top-bar-second mb-2 mb-xl-0 p-0">
            <div className="d-none d-xl-block search">
              <div className="position-relative d-flex justify-content-end">
                <form action="/search" method="get" id="search-form">
                  <input type="text" name="keyword" placeholder="Tìm kiếm" />
                  <img
                    src="./images/icons/icon-03.svg"
                    onClick={() =>
                      document.getElementById('search-form').submit()
                    }
                    alt="icon-search"
                    className="icon icon-search"
                    loading="lazy"
                  />
                </form>
              </div>
            </div>
            <div className="social pr-0">
              <a
                className="me-2 me-sm-2"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/icons/facebook.png"
                  alt="facebook"
                  loading="lazy"
                />
              </a>
              <a
                className="me-2 me-sm-2"
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/icons/tiktok.png"
                  alt="tiktok"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/icons/youtube.png"
                  alt="youtube"
                  loading="lazy"
                />
              </a>
              <a
                href="https://careers.hbr.edu.vn/"
                title="Tuyển dụng"
                className="btn recruit d-inline-flex d-sm-none"
              >
                Tuyển dụng
              </a>
            </div>
            <a
              href="/"
              title="Tuyển dụng"
              className="btn recruit d-none d-sm-block"
            >
              Tuyển dụng
            </a>
            <span className="btn ms-md-5 d-none ipad-screen-btn">
              Đăng ký nhận tư vấn
            </span>
          </div>
          <div className="flex-grow-1 p-0 d-flex d-sm-none align-items-center top-bar-first"></div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
