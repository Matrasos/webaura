import Divider from "../Divider/Divider";
import Card from "./Card/Card";

const Cases = () => {

  const cardData = [
    {
      src: '/src/assets/cases/mindray.png',
      title: 'Mindray Resona I9',
      chips: [1, 2, 3]
    },
    {
      src: '/src/assets/cases/winter.png',
      title: 'WINTER 23’',
      chips: [4, 5]
    },
    {
      src: '/src/assets/cases/autowise.png',
      title: 'Autowise Avenue',
      chips: [6, 7, 8, 9]
    },
    {
      src: '/src/assets/cases/coffeo.png',
      title: 'Coffeo',
      chips: [6, 7, 8, 9]
    },
    {
      src: '/src/assets/cases/cozy.png',
      title: 'Cozy Home',
      chips: [6, 7, 8, 9]
    },
    {
      src: '/src/assets/cases/green.png',
      title: 'Green Grove',
      chips: [6, 7, 8, 9]
    },
    {
      src: '/src/assets/cases/arthub.png',
      title: 'Художественная школа  ArtHub',
      chips: [6, 7, 8, 9]
    }
  ];

  return (
    <section className="cases">
      <Divider number='01' text='Кейсы' />
      <div className="cases__grid">
        {cardData.map((card, index) => (
          <Card key={index} src={card.src} title={card.title} chips={card.chips} />
        ))}
      </div>
    </section>
  );
}

export default Cases;