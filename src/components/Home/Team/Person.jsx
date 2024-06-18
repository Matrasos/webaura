import { Link } from "react-router-dom";

const Person = ({ name, src, description, link }) => {
  return (
    <div className="team__info-persons-person">
      <img src={src} alt="WebAura person" />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link target="_blank" className="team__info-persons-person-link" to={link}>Подробнее</Link>
    </div>
  );
}

export default Person;