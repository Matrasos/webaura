const Card = ({ src, title, chips }) => {
  return (
    <div className="cases__grid-card">
      <img src={src} alt="AuraWeb case" />
      <h3>{title}</h3>
      <div className="cases__grid-card-chips">
        {chips.map((chip, index) => (
          <div key={index}>{chip}</div>
        ))}
      </div>
    </div>
  );
}

export default Card;