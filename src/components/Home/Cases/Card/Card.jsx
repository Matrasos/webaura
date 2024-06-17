const Card = ({ card, onSelect }) => {
  return (
    <div onClick={onSelect} className="cases__grid-card">
      <img src={card.src} alt={card.title} />
      <h3>{card.title}</h3>
      <div className="cases__grid-card-chips">
        {card.chips.map((chip, index) => (
          <div key={index}>{chip}</div>
        ))}
      </div>
    </div>
  );
}

export default Card;
