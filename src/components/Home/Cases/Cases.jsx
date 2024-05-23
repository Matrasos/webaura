import Divider from "../Divider/Divider";
import Card from "./Card/Card";

const Cases = () => {

  const cardData = [
    {
      link: '/cases/mindray',
      src: '/src/assets/cases/mindray.png',
      title: 'Mindray Resona I9',
      chips: [1, 2, 3]
    },
    {
      link: '/cases/winter',
      src: '/src/assets/cases/winter.png',
      title: 'WINTER 23’',
      chips: [4, 5]
    },
    {
      link: '/cases/autowise',
      src: '/src/assets/cases/autowise.png',
      title: 'Autowise Avenue',
      chips: [6, 7, 8, 9]
    },
    {
      link: '/cases/coffeo',
      src: '/src/assets/cases/coffeo.png',
      title: 'Coffeo',
      chips: [6, 7, 8, 9]
    },
    {
      link: '/cases/cozy',
      src: '/src/assets/cases/cozy.png',
      title: 'Cozy Home',
      chips: [6, 7, 8, 9]
    },
    {
      link: '/cases/green',
      src: '/src/assets/cases/green.png',
      title: 'Green Grove',
      chips: [6, 7, 8, 9]
    },
    {
      link: '/cases/arthub',
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
          <Card key={index} link={card.link} src={card.src} title={card.title} chips={card.chips} />
        ))}
      </div>
    </section>
  );
}

export default Cases;