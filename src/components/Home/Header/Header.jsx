import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const links = [
    { name: "Кейсы", anchor: "/#cases" },
    { name: "Услуги", anchor: "/#services" },
    { name: "Команда", anchor: "/#team" },
    { name: "О нас", anchor: "/#about" },
    { name: "Блог", anchor: "/blog" },
    { name: "Отзывы", anchor: "/#reviews" }
  ];

  const handleBurgerClick = () => {
    setIsActive(!isActive);

    document.querySelector('body').classList.toggle('lock')
  };

  const handleNavLinkClick = () => {
    setIsActive(false);
    document.querySelector('body').classList.remove('lock');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 997 && isActive) {
        setIsActive(false);
        document.querySelector('body').classList.remove('lock');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYzIiBoZWlnaHQ9IjU3IiB2aWV3Qm94PSIwIDAgMTYzIDU3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjguMzA0IDM0Ljk3Nkw1MC41NzYgOS4xMkw3Mi45NzYgMzUuMDRWNy4ySDg0LjE3NlY1Mkg3MS42OTZMNTAuNjQgMjUuNDRMMjkuNTg0IDUySDE3LjA0VjcuMkgyOC4zMDRWMzQuOTc2WiIgZmlsbD0iIzAxNDlGMiIvPgo8cGF0aCBkPSJNOTAuOTYgMjUuNzcyVjE1LjhIMTIxLjMwOFYyMS4yMzZIOTcuMjk2VjI1Ljc3MkgxMTcuOTZMMTIxLjMwOCAyOC4yMkwxMTcuOTYgMzAuNjY4SDk3LjI5NlYzNS41NjRIMTIyLjI0NFY0MUg5MC45NlYzMC42NjhMODcuNjQ4IDI4LjIyTDkwLjk2IDI1Ljc3MlpNMTUzLjE1NyAzMy4yNkMxNTMuMTU3IDMyLjY4NCAxNTMuMDQ5IDMyLjIyOCAxNTIuODMzIDMxLjg5MkMxNTIuNjE3IDMxLjU1NiAxNTIuMzUzIDMxLjMwNCAxNTIuMDQxIDMxLjEzNkMxNTEuNzUzIDMwLjk2OCAxNTEuNDUzIDMwLjg2IDE1MS4xNDEgMzAuODEyQzE1MC44MjkgMzAuNzY0IDE1MC41NzcgMzAuNzQgMTUwLjM4NSAzMC43NEgxMzMuNzUzVjM1Ljc0NEgxNTAuMzg1QzE1MC41MjkgMzUuNzQ0IDE1MC43NDUgMzUuNzIgMTUxLjAzMyAzNS42NzJDMTUxLjM0NSAzNS42MjQgMTUxLjY1NyAzNS41MTYgMTUxLjk2OSAzNS4zNDhDMTUyLjI4MSAzNS4xOCAxNTIuNTU3IDM0LjkyOCAxNTIuNzk3IDM0LjU5MkMxNTMuMDM3IDM0LjI1NiAxNTMuMTU3IDMzLjgxMiAxNTMuMTU3IDMzLjI2Wk0xNTMuMTU3IDIzLjU0QzE1My4xNTcgMjIuOTY0IDE1My4wNDkgMjIuNTA4IDE1Mi44MzMgMjIuMTcyQzE1Mi42MTcgMjEuODM2IDE1Mi4zNTMgMjEuNTk2IDE1Mi4wNDEgMjEuNDUyQzE1MS43NTMgMjEuMjg0IDE1MS40NTMgMjEuMTc2IDE1MS4xNDEgMjEuMTI4QzE1MC44MjkgMjEuMDggMTUwLjU3NyAyMS4wNTYgMTUwLjM4NSAyMS4wNTZIMTMzLjc1M1YyNi4wNkgxNTAuMzg1QzE1MC41MjkgMjYuMDYgMTUwLjc0NSAyNi4wMzYgMTUxLjAzMyAyNS45ODhDMTUxLjM0NSAyNS45NCAxNTEuNjU3IDI1LjgzMiAxNTEuOTY5IDI1LjY2NEMxNTIuMjgxIDI1LjQ3MiAxNTIuNTU3IDI1LjIwOCAxNTIuNzk3IDI0Ljg3MkMxNTMuMDM3IDI0LjUzNiAxNTMuMTU3IDI0LjA5MiAxNTMuMTU3IDIzLjU0Wk0xNTkuMjQxIDM0LjAxNkMxNTkuMjQxIDM1LjI2NCAxNTkuMDI1IDM2LjMzMiAxNTguNTkzIDM3LjIyQzE1OC4xNjEgMzguMDg0IDE1Ny41NzMgMzguODA0IDE1Ni44MjkgMzkuMzhDMTU2LjEwOSAzOS45MzIgMTU1LjI0NSA0MC4zNCAxNTQuMjM3IDQwLjYwNEMxNTMuMjUzIDQwLjg2OCAxNTIuMTg1IDQxIDE1MS4wMzMgNDFIMTI3LjQxN1YxNS44SDE1MS4wMzNDMTUyLjIzMyAxNS44IDE1My4zMzcgMTUuOTQ0IDE1NC4zNDUgMTYuMjMyQzE1NS4zNTMgMTYuNDk2IDE1Ni4yMTcgMTYuOTE2IDE1Ni45MzcgMTcuNDkyQzE1Ny42NTcgMTguMDY4IDE1OC4yMjEgMTguODEyIDE1OC42MjkgMTkuNzI0QzE1OS4wMzcgMjAuNjEyIDE1OS4yNDEgMjEuNjkyIDE1OS4yNDEgMjIuOTY0QzE1OS4yMTcgMjMuNzMyIDE1OS4wNzMgMjQuNDY0IDE1OC44MDkgMjUuMTZDMTU4LjU5MyAyNS43NiAxNTguMjQ1IDI2LjM2IDE1Ny43NjUgMjYuOTZDMTU3LjI4NSAyNy41NiAxNTYuNTg5IDI4LjA1MiAxNTUuNjc3IDI4LjQzNkMxNTYuNTg5IDI4Ljg2OCAxNTcuMjg1IDI5LjQwOCAxNTcuNzY1IDMwLjA1NkMxNTguMjQ1IDMwLjY4IDE1OC41OTMgMzEuMjkyIDE1OC44MDkgMzEuODkyQzE1OS4wNzMgMzIuNTg4IDE1OS4yMTcgMzMuMjk2IDE1OS4yNDEgMzQuMDE2WiIgZmlsbD0iIzAxNDlGMiIvPgo8L3N2Zz4K" alt="WebAura logo" />
      </Link>
      <nav className="header__nav">
        <a onClick={() => handleNavLinkClick()} href="#cases"><li>Кейсы</li></a>
        <a onClick={() => handleNavLinkClick()} href="#services"><li>Услуги</li></a>
        <a onClick={() => handleNavLinkClick()} href="#team"><li>Команда</li></a>
        <a onClick={() => handleNavLinkClick()} href="#about"><li>О нас</li></a>
        <a onClick={() => handleNavLinkClick()} href="#reviews"><li>Отзывы</li></a>
      </nav>
      <div className="header__contact">
        <Link target="_blank" to="https://api.whatsapp.com/send/?phone=77009807823&text&type=phone_number&app_absent=0">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.07436 1.37216C6.07131 -0.720771 9.35965 -0.348886 11.0317 2.00696L13.1025 4.91977C14.4644 6.83628 14.343 9.51385 12.7267 11.2072L12.3362 11.6189C12.2921 11.7917 12.2876 11.9731 12.3231 12.1482C12.4265 12.8539 12.986 14.3484 15.3292 16.8045C17.6724 19.2607 19.0999 19.8488 19.7793 19.9595C19.9503 19.9978 20.1275 19.9925 20.2961 19.9439L20.9656 19.2417C22.403 17.7368 24.6084 17.4549 26.3871 18.4737L29.5212 20.2726C32.2073 21.8085 32.885 25.6554 30.6862 27.9611L28.3545 30.4034C27.6194 31.1731 26.6316 31.8148 25.4272 31.9342C22.4572 32.2265 15.5376 31.8529 8.26354 24.2301C1.4752 17.1141 0.172337 10.908 0.00660785 7.84988C-0.0754363 6.30353 0.617017 4.99588 1.49981 4.07222L4.07436 1.37216ZM9.06265 3.56196C8.23072 2.39096 6.68172 2.29755 5.80877 3.21256L3.23259 5.91089C2.69109 6.47823 2.43183 7.10438 2.46465 7.70286C2.59592 10.1331 3.64609 15.7321 9.99959 22.3914C16.6649 29.376 22.8198 29.5853 25.1991 29.35C25.6848 29.3033 26.1672 29.0369 26.6185 28.5647L28.9485 26.1207C29.8969 25.1278 29.6886 23.3186 28.3463 22.5506L25.2122 20.7534C24.3458 20.2587 23.3318 20.4213 22.7017 21.0821L21.9551 21.8656L21.0854 20.9454C21.9551 21.8656 21.9534 21.8673 21.9518 21.8673L21.9501 21.8708L21.9452 21.876L21.9337 21.8864L21.9091 21.9106C21.8394 21.9777 21.7647 22.039 21.686 22.0939C21.5547 22.1856 21.3808 22.2877 21.1625 22.3724C20.7195 22.5471 20.132 22.6405 19.4068 22.5229C17.9841 22.2929 16.0988 21.2706 13.5931 18.6449C11.0891 16.0192 10.1112 14.0439 9.89129 12.546C9.77807 11.7815 9.86832 11.1623 10.0357 10.6952C10.1285 10.4328 10.2603 10.1876 10.4262 9.96876L10.4787 9.90822L10.5017 9.88227L10.5115 9.8719L10.5165 9.86671L10.5198 9.86325L10.9923 9.36856C11.6946 8.62997 11.7931 7.40708 11.1318 6.47477L9.06265 3.56196Z" fill="white" />
          </svg>
        </Link>
        <Link target="_blank" to="mailto:info@webaura.kz">
          <svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.8415 0H5.15853C3.7904 0 2.47831 0.531099 1.5109 1.47646C0.543486 2.42183 0 3.70401 0 5.04096V26.959C0 28.296 0.543486 29.5782 1.5109 30.5235C2.47831 31.4689 3.7904 32 5.15853 32H35.8415C37.2096 32 38.5217 31.4689 39.4891 30.5235C40.4565 29.5782 41 28.296 41 26.959V5.04096C41 3.70401 40.4565 2.42183 39.4891 1.47646C38.5217 0.531099 37.2096 0 35.8415 0ZM5.15853 2.01638H35.8415C36.6224 2.01466 37.3746 2.30337 37.9456 2.82391C38.5166 3.34444 38.8635 4.05779 38.916 4.81916C33.8193 7.48078 28.7021 10.1222 23.5848 12.7839C22.8936 13.2098 22.161 13.5677 21.3976 13.8526C20.799 13.9684 20.182 13.9582 19.5878 13.8226C18.9936 13.6869 18.4358 13.4291 17.9517 13.0662C15.0216 11.5539 12.0916 10.0214 9.18219 8.50914C6.8299 7.29931 4.43634 6.06931 2.08405 4.83932C2.13141 4.07437 2.47613 3.35602 3.04765 2.83125C3.61918 2.30649 4.37431 2.01498 5.15853 2.01638ZM38.9366 26.959C38.9366 27.7612 38.6105 28.5305 38.0301 29.0977C37.4496 29.665 36.6623 29.9836 35.8415 29.9836H5.15853C4.33765 29.9836 3.5504 29.665 2.96995 29.0977C2.3895 28.5305 2.06341 27.7612 2.06341 26.959V7.12792C6.93307 9.62823 11.7821 12.1689 16.6517 14.6894C17.5215 15.2111 18.4582 15.6179 19.4373 15.8992C20.8701 16.1272 22.3387 15.833 23.5642 15.0725C26.5561 13.54 29.5274 11.9874 32.5194 10.4549C34.6653 9.32577 36.7906 8.23693 38.9366 7.12792V26.959Z" fill="white" />
          </svg>
        </Link>
        <div className={`header__burger ${isActive ? 'active' : ''}`} onClick={handleBurgerClick}>
          <span></span>
        </div>
      </div>
      <div className={`header__menu ${isActive ? 'active' : ''}`}>
        <div className="header__menu-nav">
          {links.map((link, index) => (
            <a onClick={() => handleNavLinkClick()} className="header__menu-link" key={index} href={`${link.anchor}`}>
              <span>{link.name}</span>
              <div className="header__divider"></div>
            </a>
          ))}
        </div>
        <div className="header__menu-info">
          <Link target="_blank" to='https://yandex.kz/maps/10298/petropavlovsk/house/YkAYdwNmS0wFQFtufXR4c3xhZg==/?ll=69.146292%2C54.892022&z=17.19'>150000, Петропавловск, улица Назарбаева 193, 1 этаж</Link>
          <Link target="_blank" to='https://api.whatsapp.com/send/?phone=77009807823&text&type=phone_number&app_absent=0'>+7 (495) 930-45-56</Link>
          <Link target="_blank" to='mailto:info@webaura.kz'>info@webaura.kz</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;