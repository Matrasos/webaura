import Divider from "../Divider/Divider";
import Card from "./Card/Card";

const Cases = ({ selectedCase, setSelectedCase, caseData }) => {
  const cardData = Object.keys(caseData).map(key => ({
    link: `/cases/${key}`,
    src: `/src/assets/cases/${key}.png`,
    title: caseData[key].title,
    chips: caseData[key].chips,
    id: key
  }));

  return (
    <section id="cases" className="cases">
      <Divider number='01' text='Кейсы' />
      <div className="cases__grid">
        {cardData.map((card, index) => (
          <Card key={index} card={card} onSelect={() => setSelectedCase(card.id)} />
        ))}
      </div>
    </section>
  );
}

export default Cases;
