import React from 'react';
import './css/footer.css';
import contact from '../../data/layouts/contact';

const ourAgency = [
  {
    label: 'Giới thiệu về Thành Đồng',
    link: '/gioi-thieu',
  },
  {
    label: 'Điều khoản & Điều kiện',
    link: '/no-data',
  },
  {
    label: 'Chính sách bảo mật',
    link: '/no-data',
  },
  {
    label: 'Chính sách đổi trả & Hoàn tiền',
    link: '/no-data',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-6 position-relative">
            <a className="logo" href="/" title={contact.name}>
              <img
                src="./images/logo-da-crop-white.png"
                alt={contact.name}
                loading="lazy"
              />
            </a>
            <p>Thông tin liên hệ</p>
            <div className="text-white mb-2">
              <img
                src="./images/icons/footer-8.png"
                alt="Trường doanh nhân HBR"
                loading="lazy"
                style={{ marginRight: '5px' }}
              />
              {contact.address}
            </div>
            <div className="text-white mb-3">
              <img
                src="./images/icons/Header01-02-8.png"
                alt="Trường doanh nhân HBR"
                style={{ width: '20px', marginRight: '5px' }}
                loading="lazy"
              />
              {contact.phone}
            </div>
            <div className="social-networks">
              <a className="me-2 me-sm-2" href="https://www.youtube.com/">
                <img
                  src="./images/icons/Header01-05-8.png"
                  alt="Youtube"
                  className="icon"
                  loading="lazy"
                />
              </a>
              <a
                className="me-2 me-sm-2"
                href="https://www.facebook.com/"
                title=""
              >
                <img
                  src="./images/icons/Header01-03-8.png"
                  alt="Facebook"
                  className="icon"
                  loading="lazy"
                />
              </a>
              <a href="https://www.tiktok.com/" title="">
                <img
                  src="./images/icons/Header01-04-8.png"
                  alt="Tiktok"
                  className="icon"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="our-agency">
              <p>VỀ dịch vụ</p>
              <ul>
                {ourAgency.map((item, index) => (
                  <li key={index} className="mb-3">
                    <a href={item.link} title={item.label}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 pl-lg-0 mt-4 mt-lg-0">
            <div className="footer_third">
              <h3>Về {contact.name}</h3>
              <div className="text-white" style={{ textAlign: 'justify' }}>
                <div>
                  <span>
                    Vệ sinh công nghiệp là dịch vụ vệ sinh từ A – Z, đó là sự
                    kết hợp giữa sức lao động của công nhân vệ sinh và công nghệ
                    máy móc hiện đại làm sạch triệt để các vết bẩn bám trên bề
                    mặt sàn, hoặc các vết bẩn cứng như sơn, xi măng, nước sơn
                    pê… mà những cách làm sạch thông thường không đạt hiệu quả
                    cao mà lại tốn nhiều thời gian.
                  </span>
                </div>
              </div>
            </div>
            <div className="footer_third_end"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
