import Divider from "../Divider/Divider";
import AboutExp from "./AboutExp";

const About = () => {
  return (
    <div className="about">
      <Divider number='04' text='О НАС' />
      <div className="about__row">
        <div className="about__row-text">
          <p>Веб-студия WebAura — ваш надежный партнер в мире веб-разработки и дизайна. Мы создаем пространство для реализации ваших идей в цифровом мире, помогая вам превратить амбициозные концепции в успешные онлайн-проекты. </p>
          <p>Наша миссия - поддержать вас, молодых предпринимателей, в вашем стремлении к инновациям и технологическому развитию.</p>
        </div>
        <AboutExp />
      </div>
    </div>
  );
}

export default About;