import React, { useRef, useState, useEffect } from 'react';
import '../css/activities.css';
import data from '../../../../data/layouts/activities';

const Activities = () => {
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth + 20);
    }
  }, []);

  // useEffect(() => {
  //   let scrollInterval;

  //   if (isAutoScrolling) {
  //     scrollInterval = setInterval(() => {
  //       if (!containerRef.current) return;

  //       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

  //       if (scrollLeft + clientWidth >= scrollWidth - itemWidth) {
  //         containerRef.current.scrollTo({ left: 20, behavior: 'instant' });
  //       } else {
  //         containerRef.current.scrollBy({
  //           left: itemWidth,
  //           behavior: 'smooth',
  //         });
  //       }
  //     }, 5000);
  //   }

  //   return () => clearInterval(scrollInterval);
  // }, [isAutoScrolling, itemWidth]);

  const scrollRight = () => {
    setIsAutoScrolling(false);
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    if (scrollLeft + clientWidth >= scrollWidth - itemWidth) {
      containerRef.current.scrollTo({ left: -20, behavior: 'instant' });
    } else {
      containerRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    setIsAutoScrolling(false);
    if (!containerRef.current) return;

    const { scrollLeft } = containerRef.current;

    if (scrollLeft <= 0) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollWidth,
        behavior: 'instant',
      });
    } else {
      containerRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="bm-activities my-md-4"
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >
      <div className="container">
        <div className="text-center box-title">
          <p>CÁC HOẠT ĐỘNG CỦA</p>
          <h2 className="mb-md-3">
            CỘNG ĐỒNG business master <br className="d-inline d-xl-none" /> (tư
            vấn doanh nghiệp)
          </h2>
        </div>

        <div className="activities-wrapper">
          <button className="nav-button left" onClick={scrollLeft}>
            <img
              src="./images/icons/next-arrow.png"
              width="14"
              height="26"
              alt="Previous"
            />
          </button>

          <div className="scroll-container" ref={containerRef}>
            {[...data, ...data].map((activity, idx) => (
              <div
                key={idx}
                className="activity-item"
                ref={idx === 0 ? itemRef : null}
              >
                <div className="item box-wrap bg-white p-3 shadow-sm">
                  <div className="course-banner">
                    <a title={activity.title} href={activity.link}>
                      <img
                        src={activity.image}
                        className="mw-100"
                        alt=""
                        loading="lazy"
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
                        <img src="./images/icons/speaker.png" alt="" />{' '}
                        &nbsp;Diễn giả: {activity.speaker}
                      </li>
                      <li>
                        <img src="./images/icons/calendar.png" alt="" />{' '}
                        &nbsp;Ngày diễn ra: {activity.date}
                      </li>
                      <li>
                        <img src="./images/icons/time.png" alt="" /> &nbsp;Thời
                        gian: {activity.time}
                      </li>
                      <li>
                        <img src="./images/icons/location.png" alt="" />{' '}
                        &nbsp;Địa điểm: {activity.location}
                      </li>
                    </ul>
                    <div className="text-center more mt-auto">
                      <a
                        className="btn"
                        title={activity.title}
                        href={activity.link}
                      >
                        <img src="./images/icons/list.png" alt="" /> xem chi
                        tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-button right" onClick={scrollRight}>
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
