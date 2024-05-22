import Divider from "../Divider/Divider";
import Person from "./Person";

const Team = () => {
  const teamData = [
    {
      name: "Мукашева Нура Марленовна",
      src: "/src/assets/team/nura.png",
      description: "Дизайнер, SEO, копирайтер",
      link: "#"
    },
    {
      name: "Аксаков Максим Андреевич",
      src: "/src/assets/team/maksim.png",
      description: "Back-end, front-end",
      link: "#"
    }
  ];

  return (
    <div className="team">
      <Divider number='03' text='КОМАНДА' />
      <div className="team__info">
        <div className="team__info-persons">
          {teamData.map((person, index) => (
            <Person
              key={index}
              name={person.name}
              src={person.src}
              description={person.description}
              link={person.link}
            />
          ))}
        </div>
        <div className="team__info-text">
          <p className="team__info-text-title">МЫ - WEBAURA, ВАШ НАДЕЖНЫЙ ПАРТНЕР в мире цифровых решений, готовый выполнить любую задачу </p>
          <div className="team__info-text-divider"></div>
          <div className="team__info-text-row">
            <p>Мы внимательно изучаем потребности клиентов и создаем инновационные веб-платформы для достижения их целей.</p>
            <p>Наша команда творчески подходит к каждому проекту, стремясь создать уникальные и эффективные веб-решения.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;