const AboutExp = () => {
  const expData = [
    { number: "50+", description: "Успешно выполненных проектов" },
    { number: "2+", description: "Года опыта в сфере digital" },
    { number: "99%", description: "Уровень выполнения заказов" }
  ];
  return (
    <div className="about__row-info">
      {expData.map((item, index) => (
        <div>
          <h4>{item.number}</h4>
          <p>{item.description}</p>
        </div>
      ))}

    </div>
  );
}

export default AboutExp;