import React, { useState } from 'react';
import './css/nav-footer.css';
import navFooter from '../../data/layouts/navFooter';

const NavFooter = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const toggleMenu = (idx) => {
    setIsDropdownOpen(isDropdownOpen === idx ? null : idx);
  };

  return (
    <section className="section-nav-footer  d-sm-none">
      <ul>
        <li>
          <a href="/" title="Trường Doanh nhân HBR">
            <img src="./images/icons/home.png" alt="Trang chủ" />
            <br />
            Trang chủ
          </a>
        </li>

        {navFooter.map((item, idx) => (
          <li key={idx}>
            <div className="btn-group dropup d-block">
              <button
                className={`dropdown-toggle ${
                  isDropdownOpen === idx ? 'show' : ''
                }`}
                type="button"
                onClick={() => toggleMenu(idx)}
              >
                <img src={item.logo} alt={item.label} />
                <br />
                {item.label}
              </button>

              <ul
                className={`dropdown-menu ${
                  isDropdownOpen === idx ? 'show' : ''
                }`}
                role="menu"
              >
                {item.subItems.map((subItem, index) => (
                  <li key={index}>
                    <a href={subItem.link} title={subItem.label}>
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavFooter;
