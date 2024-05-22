import React from 'react';
import Divider from "../Divider/Divider";

import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import SliderNavigation from './SliderNavigation/SliderNavigation';

const Reviews = () => {

  const slides = [
    {
      id: 1,
      image: '/src/assets/reviews/1.png',
      name: 'John Doe',
      description: '“Я не могу достаточно выразить свою благодарность команде WebAura за их профессионализм, творчество и усердную работу. Работая с ними, я получил идеальное сочетание качественного дизайна, инновационных решений и внимательного отношения к деталям.”',
    },
    {
      id: 2,
      image: '/src/assets/reviews/1.png',
      name: 'Jane Smith',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      image: '/src/assets/reviews/1.png',
      name: 'Alice Johnson',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];


  return (
    <div className="reviews">
      <Divider number='05' text='Отзывы' />
      <div className='reviews-container'>
        <div className="reviews__quote">
          <svg width="106" height="69" viewBox="0 0 106 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M82.7298 43.4855C78.1483 43.4855 73.6697 42.2103 69.8604 39.8212C66.051 37.432 63.082 34.0363 61.3287 30.0633C59.5755 26.0904 59.1167 21.7186 60.0105 17.5009C60.9043 13.2833 63.1105 9.40909 66.3501 6.36831C69.5897 3.32753 73.7172 1.25674 78.2106 0.41779C82.7041 -0.421158 87.3616 0.00942063 91.5944 1.65508C95.8271 3.30073 99.4449 6.08755 101.99 9.66313C104.536 13.2387 105.894 17.4424 105.894 21.7427L106 24.8488C106 30.5594 104.802 36.2141 102.473 41.49C100.145 46.7659 96.7327 51.5597 92.4306 55.5977C88.1286 59.6357 83.0214 62.8388 77.4005 65.0242C71.7797 67.2095 65.7553 68.3343 59.6713 68.3343V55.9099C64.0189 55.9209 68.3257 55.1227 72.3427 53.5617C76.3596 52.0006 80.007 49.7076 83.0739 46.8152C84.2659 45.6985 85.3656 44.4981 86.3633 43.2246C85.1613 43.4019 83.9465 43.4912 82.7298 43.4917V43.4855ZM23.1643 43.4855C18.5829 43.4855 14.1043 42.2103 10.2949 39.8212C6.48557 37.432 3.51654 34.0363 1.76329 30.0633C0.0100369 26.0904 -0.448694 21.7186 0.445106 17.5009C1.33891 13.2833 3.5451 9.40909 6.78469 6.36831C10.0243 3.32753 14.1518 1.25674 18.6452 0.41779C23.1386 -0.421158 27.7962 0.00942063 32.0289 1.65508C36.2617 3.30073 39.8795 6.08755 42.4248 9.66313C44.9701 13.2387 46.3287 17.4424 46.3287 21.7427L46.4346 24.8488C46.4346 36.3819 41.5535 47.4426 32.8652 55.5977C24.1769 63.7528 12.393 68.3343 0.105904 68.3343V55.9099C4.45351 55.9209 8.76029 55.1227 12.7772 53.5617C16.7942 52.0006 20.4416 49.7076 23.5085 46.8152C24.7005 45.6985 25.8001 44.4981 26.7978 43.2246C25.5959 43.4019 24.3811 43.4912 23.1643 43.4917V43.4855Z" fill="#0149F2" />
          </svg>
        </div>
        <div className="reviews__slider">
          <Swiper
            className='reviews__slider-swiper'
            modules={[Navigation, A11y]}
            spaceBetween={100}
            loop={true}
            slidesPerView={1}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="reviews__slider-slide">
                <img src={slide.image} alt="WebAura review photo" />
                <p className='reviews__slider-slide-name'>{slide.name}</p>
                <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.864 10.616L13.216 0.92L21.616 10.64V0.199999H25.816V17H21.136L13.24 7.04L5.344 17H0.64V0.199999H4.864V10.616Z" fill="#0149F2" />
                </svg>
                <p className='reviews__slider-slide-description'>{slide.description}</p>
              </SwiperSlide>
            ))}
            <SliderNavigation />
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Reviews;