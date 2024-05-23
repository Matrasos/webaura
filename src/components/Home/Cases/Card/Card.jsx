import { Link } from "react-router-dom";

const Card = ({ link, src, title, chips }) => {
  return (
    <Link to={link} className="cases__grid-card">
      <img src={src} alt="AuraWeb case" />
      <h3>{title}</h3>
      <div className="cases__grid-card-chips">
        {chips.map((chip, index) => (
          <div key={index}>{chip}</div>
        ))}
      </div>
    </Link>
  );
}

export default Card;