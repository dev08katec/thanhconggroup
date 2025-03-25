import React, { useRef, useState } from 'react';
import '../css/activities.css';
import data from '../../../../data/layouts/activities';

const Activities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef(null);
  const scrollAmount = 300; // Điều chỉnh khoảng cách cuộn

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bm-activities my-md-4">
      <div className="container">
        <div className="text-center box-title">
          <p>CÁC HOẠT ĐỘNG CỦA</p>
          <h2 className="mb-md-3">
            CỘNG ĐỒNG business master <br className="d-inline d-xl-none" /> (tư
            vấn doanh nghiệp)
          </h2>
        </div>

        <div className="grid-container">
          {data.slice(currentIndex, currentIndex + 3).map((activity, idx) => (
            <div key={idx} className="owl-item active ">
              <div className="item box-wrap bg-white p-3 shadow-sm">
                <div>
                  <div className="course-banner">
                    <a title={activity.title} href={activity.link}>
                      <img
                        data-src={activity.image}
                        className="mw-100 owl-lazy"
                        alt=""
                        loading="lazy"
                        src={activity.image}
                        style={{ opacity: '1' }}
                      />
                    </a>
                  </div>
                  <div className="info d-flex flex-column">
                    <h3>
                      <a title={activity.title} href={activity.link}>
                        {activity.title}
                      </a>
                    </h3>

                    <ul>
                      <li>
                        <img
                          src="./images/icons/speaker.png"
                          className="mw-100"
                          alt=""
                          loading="lazy"
                        />
                        &nbsp;Diễn giả: {activity.speaker}
                      </li>
                      <li>
                        <img
                          src="./images/icons/calendar.png"
                          className="mw-100"
                          alt=""
                          loading="lazy"
                        />
                        &nbsp;Ngày diễn ra: {activity.date}
                      </li>
                      <li>
                        <img
                          src="./images/icons/time.png"
                          className="mw-100"
                          alt=""
                          loading="lazy"
                        />
                        &nbsp;Thời gian: {activity.time}
                      </li>
                      <li>
                        <img
                          src="./images/icons/location.png"
                          className="mw-100"
                          alt=""
                          loading="lazy"
                        />
                        &nbsp;Địa điểm: {activity.location}
                      </li>
                    </ul>

                    <div className="text-center more mt-auto">
                      <a
                        className="btn"
                        title={activity.title}
                        href={activity.link}
                      >
                        <img
                          src="./images/icons/list.png"
                          className="mw-100"
                          alt=""
                          loading="lazy"
                        />{' '}
                        xem chi tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="owl-nav">
          <button
            type="button"
            role="presentation"
            className="owl-prev"
            fdprocessedid="h2fhc"
            onClick={() => setCurrentIndex(currentIndex - 1)}
          >
            <img
              src="./images/icons/next-arrow.png"
              width="14"
              height="26"
              alt="Previous"
            />
          </button>
          <button
            type="button"
            role="presentation"
            className="owl-next"
            fdprocessedid="703s8i"
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            <img
              src="./images/icons/next-arrow.png"
              width="14"
              height="26"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
