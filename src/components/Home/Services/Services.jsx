import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";

const Services = () => {

  const servicesData = [
    {
      name: "Разработка: превращаем вашу идею в реальность",
      src: ""
    },
    {
      name: "Веб-дизайн: создаём интерфейс, которым пользуются",
      src: ""
    },
    {
      name: "SEO: поднимитесь на вершину поисковых результатов",
      src: ""
    },
    {
      name: "Мобильные приложения на заказ: современные технологии и непрерывная поддержка",
      src: ""
    },
    {
      name: "Сопровождение сайтов: поддержим ваш сайт в актуальном состоянии",
      src: ""
    },
    {
      name: "Оптимизация сайтов: повысим ваш рейтинг и видимость вашего проекта",
      src: ""
    }
  ];


  return (
    <div className="services">
      <Divider number='02' text='Услуги' />
      <div className="services__links">
        {servicesData.map((service, index) => (
          <Link key={index} className="services__links-link" to="#">{service.name}</Link>
        ))}
      </div>
    </div>
  );
}

export default Services;