import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";

const Services = () => {

  const servicesData = [
    {
      name: "Разработка: превращаем вашу идею в реальность",
      src: "/services/develop"
    },
    {
      name: "Веб-дизайн: создаём интерфейс, которым пользуются",
      src: "/services/design"
    },
    {
      name: "SEO: поднимитесь на вершину поисковых результатов",
      src: "/services/seo"
    },
    {
      name: "Мобильные приложения на заказ: современные технологии и непрерывная поддержка",
      src: "/services/mobile"
    },
    {
      name: "Сопровождение сайтов: поддержим ваш сайт в актуальном состоянии",
      src: "/services/service"
    },
    {
      name: "Оптимизация сайтов: повысим ваш рейтинг и видимость вашего проекта",
      src: "/services/optimization"
    }
  ];


  return (
    <div className="services" id="services">
      <Divider number='02' text='Услуги' />
      <div className="services__links">
        {servicesData.map((service, index) => (
          <Link key={index} className="services__links-link" to={service.src}>{service.name}</Link>
        ))}
      </div>
    </div>
  );
}

export default Services;