import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1>
          <span>web</span> aura
        </h1>
        <p>
          Создаем функциональные сайты и проекты,
          <br />
          которые позволяют расти, зарабатывать и быть лидерами.
        </p>
      </div>
      <div className="hero-slider">
        <Marquee speed={80} autoFill pauseOnClick>
          <div className="hero-slider-marquee">
            <span>ПОДДЕРЖКА 25/8</span>
            <span>ИНДИВИДУАЛЬНЫЙ ПОДХОД</span>
          </div>
        </Marquee>
        <Marquee speed={80} autoFill direction="right">
          <div className="hero-slider-marquee">
            <span>ПОДДЕРЖКА 25/8</span>
            <span>ИНДИВИДУАЛЬНЫЙ ПОДХОД</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Hero;