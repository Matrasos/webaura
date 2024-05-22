import { useSwiper } from "swiper/react";

const SliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="reviews__slider-btns-wrapper">
      <div className="reviews__slider-btns">
        <button onClick={() => swiper.slidePrev()}>
          <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.28008 7.29289C0.889553 7.68342 0.889553 8.31658 1.28008 8.70711L7.64404 15.0711C8.03456 15.4616 8.66772 15.4616 9.05825 15.0711C9.44877 14.6805 9.44877 14.0474 9.05825 13.6569L3.4014 8L9.05825 2.34315C9.44877 1.95262 9.44877 1.31946 9.05825 0.928932C8.66772 0.538408 8.03456 0.538408 7.64404 0.928932L1.28008 7.29289ZM41 7L1.98718 7V9L41 9V7Z" fill="black" />
          </svg>
        </button>
        <div></div>
        <button onClick={() => swiper.slideNext()}>
          <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.7199 8.70711C40.1104 8.31658 40.1104 7.68342 39.7199 7.29289L33.356 0.928932C32.9654 0.538408 32.3323 0.538408 31.9417 0.928932C31.5512 1.31946 31.5512 1.95262 31.9417 2.34315L37.5986 8L31.9417 13.6569C31.5512 14.0474 31.5512 14.6805 31.9417 15.0711C32.3323 15.4616 32.9654 15.4616 33.356 15.0711L39.7199 8.70711ZM0 9L39.0128 9V7L0 7L0 9Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SliderNavigation;