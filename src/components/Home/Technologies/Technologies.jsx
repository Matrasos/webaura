import Marquee from "react-fast-marquee";
import Divider from "../Divider/Divider";
import { Fragment } from "react";

const Technologies = () => {

  const technologiesOne = [
    "HTML",
    "Git",
    "Angular",
    "CSS",
    "HTML",
    "React",
    "HTML"
  ];

  const technologiesTwo = [
    "Bitrix",
    "Tilda",
    "PostgreSQL",
    "WordPress",
    "PHP",
    "Vue.js"
  ];

  const technologiesThree = [
    "Java",
    "Python",
    "JS",
    "MySQL",
    "Docker",
    "HTML",
    "Angular"
  ];

  return (
    <div className="technologies">
      <div className="technologies-container">
        <Divider number='06' text='КЛЮЧЕВЫЕ ТЕХНОЛОГИИ' />
        <div className="technologies-strings">
          <Marquee speed={80} autoFill pauseOnClick>
            <div className="technologies-slider">
              {technologiesOne.map((item, index) => (
                <Fragment key={index}>
                  <span>{item}</span>
                  <div className="technologies-slider-divider"></div>
                </Fragment>
              ))}
            </div>
          </Marquee>
          <Marquee className="technologies-string-small" speed={80} autoFill pauseOnClick direction="right">
            <div className="technologies-slider">
              {technologiesTwo.map((item, index) => (
                <Fragment key={index}>
                  <span>{item}</span>
                  <div className="technologies-slider-divider"></div>
                </Fragment>
              ))}
            </div>
          </Marquee>
          <Marquee speed={80} autoFill pauseOnClick>
            <div className="technologies-slider">
              {technologiesThree.map((item, index) => (
                <Fragment key={index}>
                  <span>{item}</span>
                  <div className="technologies-slider-divider"></div>
                </Fragment>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Technologies;