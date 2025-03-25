import { useState, useEffect } from 'react';
import './css/header.css';
import menuItems from '../../data/layouts/menuItems';
import { IoIosArrowDown } from 'react-icons/io';
import contact from '../../data/layouts/contact';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (idx) => {
    setIsSubMenu(isSubMenu === idx ? null : idx);
  };

  return (
    <div>
      <header
        className={`d-flex header-transition ${
          isVisible ? 'header-fixed' : ''
        } `}
      >
        <div className="container navbar-area d-flex align-items-center">
          <nav className="navbar navbar-expand-lg">
            <a href="/" title={contact.name}>
              <img
                src={contact.logo}
                alt={contact.name}
                className="logo_main"
                loading="lazy"
              />
            </a>

            <div className="mobile_menu_open " onClick={toggleMenu}>
              <img
                src="./images/icons/icons8-menu-50.png"
                alt="menu icon"
                loading="lazy"
              />
            </div>

            <div
              className={`collapse navbar-collapse sub-menu-bar justify-content-end ${
                isMenuOpen ? 'show' : ''
              }`}
            >
              <ul id="nav" className="navbar-nav ms-auto ps-0">
                {menuItems.map((data, index) => (
                  <li key={index} className="nav-item position-relative">
                    <span className="d-block">
                      {data.label}
                      {data.items.length > 0 && (
                        <IoIosArrowDown
                          className="fas "
                          style={{ fontSize: '12px' }}
                        />
                      )}
                    </span>
                    <ul className="subnav position-absolute ps-0">
                      {data.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          {item.labelItem !== '' && (
                            <span style={{ fontWeight: 'bold' }}>
                              {item.labelItem}
                            </span>
                          )}
                          {item.subItems.length > 0 && (
                            <ul className="subnav-list ">
                              {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a href={subItem.link} title={subItem.label}>
                                    {subItem.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <span className="btn ms-auto go-to-enrollment-form">
                Đăng ký nhận tư vấn
              </span>
            </div>
          </nav>
        </div>
      </header>
      <div
        className={`mobile_menu_overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`mobile_menu_wrapper ${
          isMenuOpen ? 'show_mobile_menu_wrapper' : ''
        }`}
      >
        <div className="d-flex justify-content-between align-items-center pe-2">
          <img
            src={contact.logo}
            alt={contact.name}
            width="222"
            height="138"
            className="logo-side-bar"
          />
          <span className="icon-close" onClick={toggleMenu}>
            ×
          </span>
        </div>
        <nav className="mobile_menu_nav mobile-menu">
          <ul>
            {menuItems.map((data, index) => (
              <>
                <li key={index} className="position-relative">
                  <div
                    className={`dropdown-btn ${
                      isSubMenu === index ? 'active' : ''
                    }`}
                    onClick={() => toggleSubMenu(index)}
                  >
                    <span>{data.label}</span>
                    {data.items.length > 0 && (
                      <i
                        className={`icon-angle-down ${
                          isSubMenu === index ? 'rotate-up' : ''
                        }`}
                      ></i>
                    )}
                  </div>
                </li>
                {isSubMenu === index && (
                  <ul className="dropdown-container">
                    {data.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.labelItem !== '' && (
                          <span className="mobile-subnav">
                            {item.labelItem}
                          </span>
                        )}
                        {item.subItems.length > 0 && (
                          <ul>
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  style={{ color: '#003c86' }}
                                  href={subItem.link}
                                  title={subItem.label}
                                >
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
