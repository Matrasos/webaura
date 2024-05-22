import Divider from "../Divider/Divider";
import AboutExp from "./AboutExp";

const About = () => {
  return (
    <>
      <div className="about">
        <Divider number='04' text='О НАС' />
        <div className="about__row">
          <div className="about__row-text">
            <p>Веб-студия WebAura — ваш надежный партнер в мире веб-разработки и дизайна. Мы создаем пространство для реализации ваших идей в цифровом мире, помогая вам превратить амбициозные концепции в успешные онлайн-проекты. </p>
            <p>Наша миссия - поддержать вас, молодых предпринимателей, в вашем стремлении к инновациям и технологическому развитию.</p>
          </div>
          <AboutExp />
        </div>
        <div className="about__banner">
          <div className="about__banner-container">
            <p>Работаем с клиентами честно и выполняем проекты максимально качественно</p>
            <svg width="112" height="84" viewBox="0 0 112 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.9057 0L3.86354 11.9123H11.8917V23.8245H19.9273V11.9123H27.9555L15.9057 0ZM56.0539 0L44.0117 11.9123H52.0399V23.8245H60.068V11.9123H68.0961L56.0539 0ZM96.1946 0L84.1524 11.9123H92.1805V23.8245H100.209V11.9123H108.237L96.1946 0ZM15.9057 29.7806C11.5906 29.7806 7.75217 33.2054 7.75217 37.6911C7.75217 39.9991 8.78077 42.0465 10.3362 43.4611L11.8917 44.9129L9.40797 45.1921C7.04971 45.4713 5.44408 46.3089 4.11442 47.6304C2.78476 48.9519 1.80633 50.776 1.20422 52.9165C0.0250878 56.8066 0 61.5901 0 65.7594H6.49777L8.07831 84H23.0633L24.8697 65.7594H31.7187C31.6936 61.6459 31.4176 56.9182 30.1381 53.0468C29.4357 50.9435 28.4572 49.1008 27.1276 47.7607C25.8481 46.4392 24.2675 45.6016 22.1351 45.3038L19.7015 44.9688L21.3072 43.5728C22.9128 42.121 24.0167 40.055 24.0167 37.6911C24.0167 33.466 20.5796 30.1715 16.7086 29.7806H15.9057ZM56.0539 29.7806C51.7388 29.7806 47.9004 33.2054 47.9004 37.6911C47.9004 39.9991 48.929 42.0465 50.4844 43.4611L52.0399 44.9129L49.5562 45.1921C47.1979 45.4713 45.5923 46.3089 44.2626 47.6304C42.933 48.9519 41.9545 50.776 41.3524 52.9165C40.1733 56.8066 40.1482 61.5901 40.1482 65.7594H46.646L48.2265 84H63.204L65.0103 65.7594H71.8593C71.8342 61.6459 71.5583 56.9182 70.2788 53.0468C69.5763 50.9435 68.5979 49.1008 67.2682 47.7607C65.9888 46.4392 64.4082 45.6016 62.2757 45.3038L59.8422 44.9688L61.4478 43.5728C63.0535 42.121 64.1573 40.055 64.1573 37.6911C64.1573 33.466 60.7203 30.1715 56.8568 29.7806H56.0539ZM96.1946 29.7806C91.9046 29.7806 88.0661 33.2054 88.0661 37.6911C88.0661 39.9991 89.0947 42.0465 90.6502 43.4611L92.2056 44.9129L89.7219 45.1921C87.3637 45.4713 85.7329 46.3089 84.4033 47.6304C83.0736 48.9519 82.0952 50.776 81.4931 52.9165C80.314 56.8066 80.2889 61.5901 80.2889 65.7594H86.7867L88.3923 84H103.345L105.176 65.7594H112C111.975 61.6459 111.699 56.9182 110.445 53.0468C109.742 50.9435 108.739 49.1008 107.409 47.7607C106.129 46.4392 104.549 45.6016 102.442 45.3038L100.008 44.9688L101.589 43.5728C103.194 42.121 104.298 40.055 104.298 37.6911C104.298 33.466 100.861 30.1715 96.9974 29.7806H96.1946Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>

    </>
  );
}

export default About;