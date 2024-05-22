const Divider = ({ number, text }) => {
  return (
    <div className="divider">
      <div className="divider__line"></div>
      <div className="divider__info">
        <div className="divider__info-number">{number}</div>
        <div className="divider__info-text">{text}</div>
        <div className="divider__info-dot"></div>
      </div>
    </div>
  );
}

export default Divider;