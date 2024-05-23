import { useParams } from "react-router-dom";

const Case = () => {

  const caseData = {
    'winter': {
      title: 'Winter 23',
      chips: ['WINTER 23', '2023'],
      // Здесь обернуть название в span
      description: '<span>WINTER 23</span> - магазин зимней одежды, специализирующийся на предоставлении широкого ассортимента модной и функциональной одежды для холодного сезона. Компания стремится предложить клиентам высококачественные товары, отвечающие последним модным тенденциям и требованиям комфорта.',
      tasks: 'Увеличить узнаваемость бренда WINTER 23 среди целевой аудитории. Привлечь новых клиентов и удержать существующих. Увеличить объем продаж зимней одежды в магазине. Повысить уровень вовлеченности аудитории в бренд через организацию интересных и эмоциональных мероприятий. Создать позитивный образ бренда WINTER 23, связанный с комфортом, стилем и качеством. Запустить успешные маркетинговые кампании для продвижения новой зимней коллекции и стимулирования продаж. Установить магазин WINTER 23 как ключевое место для приобретения зимней одежды, обладающей стильным дизайном и высоким качеством.',
      solutions: [
        'Разработана инновационная механика долгосрочной промо-акции: создание игрового приложения для проведения акции, а также разработка промо-материалов для анонсирования акции потенциальным участникам промо.',
        'При регистрации чека на games.5ka.ru или в Telegram на сумму, равную или превышающую «пороговую», каждый клиент получает гарантированный приз и получает возможность участвовать в розыгрыше суперпризов. Больше загруженных чеков – шире возможности!'
      ],
      results: [
        'Компания WINTER 23 успешно осуществила долгосрочную промо-акцию с использованием инновационной механики. Создание игрового приложения и промо-материалов позволило эффективно анонсировать акцию и привлечь внимание целевой аудитории.',
        'Регистрация чека на платформе games.5ka.ru и в Telegram стала легкой и доступной для клиентов, что способствовало активному участию. Гарантированные призы и возможность участвовать в розыгрыше суперпризов стимулировали повышенный интерес со стороны покупателей.'
      ]
    },
  };

  const { caseName } = useParams();
  const caseInfo = caseData[caseName];

  if (!caseInfo) {
    return <div>Case not found</div>;
  }


  return (
    <div className="cases">

      <h2 className="cases__subtitle">кейсы</h2>

      <h1 className="cases__title">{caseInfo.title}</h1>

      <div className="cases__chips">
        <div>{caseInfo.chips[0]}</div>
        <div>{caseInfo.chips[1]}</div>
      </div>

      <p className="cases__description" dangerouslySetInnerHTML={{ __html: caseInfo.description }}></p>

      <div className="cases__divider"></div>

      <h2 className="cases__title-common">ЗАДАЧИ</h2>

      <p className="cases__description-common" dangerouslySetInnerHTML={{ __html: caseInfo.tasks }}></p>

      <div className="cases__divider"></div>

      <h2 className="cases__title-common">РЕШЕНИЕ</h2>

      <p className="cases__description-common">{caseInfo.solutions[0]}</p>

      <div className="cases__divider"></div>

      <h2 className="cases__title-common">Итог</h2>

      <div className="cases__description-common">
        <ul>
          <li>{caseInfo.results[0]}</li>
          <li>{caseInfo.results[1]}</li>
        </ul>
      </div>

      <p className="cases__data">
        Кейс был проведен с 10 ноября 2023 года по 10 января 2024 года
      </p>

    </div>
  );
}

export default Case;