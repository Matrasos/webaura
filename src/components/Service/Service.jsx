import { Link, useParams } from "react-router-dom";

const Service = () => {
  const serviceData = {
    'develop': {
      link: 'Разработка',
      title: 'Разработка: превращаем вашу идею в реальность',
      description: 'Мы специализируемся на превращении ваших креативных идей в конкретные продукты и услуги, готовые к внедрению на рынке. Наша команда предлагает уникальный подход, объединяющий онлайн и офлайн сферы, чтобы максимально эффективно достичь вашей целевой аудитории.',
      include: [
        {
          number: '01',
          title: 'Анализ идеи',
          description: 'Наша веб-студия предлагает вам полный спектр услуг по анализу вашей идеи с целью выявления ее потенциала и особенностей',
        },
        {
          number: '02',
          title: 'Разработка стратегии',
          description: 'Наша команда экспертов производит анализ рынка, определяя ваши конкурентные преимущества и возможные угрозы.',
        }
      ],
      advantages: ['Высокий уровень профессионализма', 'Современные технологии', 'Привлекательный дизайн']
    },
  };

  const { service } = useParams();
  const serviceInfo = serviceData[service];

  if (!serviceInfo) {
    return (
      <div className="services__not-found">
        <p className="services__not-found__title">Такого услуги ещё нет :) </p>
        <p className="services__not-found__subtitle">По вопросам пишите на почту <span><Link to=''>info@webaura.kz</Link></span></p>
      </div>
    );
  }
  return (
    <div className="services">
      <h2 className="services__link">
        <Link to="/">Главная / Услуги / <span>{serviceInfo.link}</span></Link>
      </h2>
      <h1 className="services__title">{serviceInfo.title}</h1>
      <p className="services__description">{serviceInfo.description}</p>
      <div className="services__divider"></div>
      <h2 className="services__include-title">Наши услуги включают в себя</h2>
      <div className="services__include-list">
        {serviceInfo.include.map((item, index) => (
          <div key={index} className="services__include-list-item">
            <div>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="services__divider"></div>
      <div className="services__advantages">
        <h2 className="services__advantages-title">Преимущества</h2>
        <div className="services__advantages-list">
          <ul>
            {serviceInfo.advantages.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="services-btn">Начать работу</button>
    </div>
  );
}

export default Service;