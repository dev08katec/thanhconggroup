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
              <img src={contact.logoWhite} alt={contact.name} loading="lazy" />
            </a>
            <p>Thông tin liên hệ</p>
            <div className="text-white mb-3">
              <img
                src="./images/icons/footer-8.png"
                alt={contact.name}
                loading="lazy"
                style={{ margin: '0 5px' }}
              />
              {contact.address}
            </div>

            <div className="text-white mb-3">
              <img
                src="./images/icons/Header01-02-8.png"
                alt={contact.name}
                style={{ width: '20px', marginRight: '5px' }}
                loading="lazy"
              />
              {contact.phone}
            </div>

            <div className="text-white mb-3">
              <img
                src="./images/icons/email.png"
                alt={contact.name}
                style={{ width: '20px', marginRight: '5px' }}
                loading="lazy"
              />
              {contact.email}
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
                    Đến với CÔNG TY THÀNH ĐỒNG quý khách hoàn toàn yên về chất
                    lượng, uy tín, giá cả hợp lý, an toàn, nhanh chóng đảm bảo
                    làm hài long Quý khách
                  </span>
                </div>
              </div>
            </div>
            <div
              className="footer_third_end"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '20px',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10869.626502183472!2d106.74471500000001!3d10.796811000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175260d70427ddf%3A0xae5076c74cfdfb26!2zMjIgTmd1eeG7hW4gSG_DoG5nLCBBbiBQaMO6LCBRdeG6rW4gMiwgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2sus!4v1742889724944!5m2!1svi!2sus"
                width="100%"
                height="200"
                style={{ border: 'none', width: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
