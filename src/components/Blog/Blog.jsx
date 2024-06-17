import { Link } from "react-router-dom";
import Divider from "components/Home/Divider/Divider";
import HeaderBlog from "./HeaderBlog/HeaderBlog";
import Mailing from "./Mailing/Mailing";
import Article from "./Article/Article";

const Blog = () => {

  let articles = [
    {
      src: "/src/assets/blog/post-1.png",
      date: "01.05.2024",
      title: "Искусство адаптивного и отзывчивого дизайна: Как обеспечить безупречную работу вашего сайта на всех устройствах",
    },
    {
      src: "/src/assets/blog/post-2.png",
      date: "10.03.2024",
      title: "Погружение в последние тенденции в веб-дизайне: Цветовые палитры, шрифты и анимация",
    },
    {
      src: "/src/assets/blog/post-3.png",
      date: "01.03.2024",
      title: "UX/UI дизайн: Создание веб-интерфейсов, которые восхищают и удовлетворяют пользователей.",
    },
    {
      src: "/src/assets/blog/post-1.png",
      date: "20.12.2023",
      title: "Эффективные инструменты веб-разработки: обзор инновационных инструментов, которые помогают достичь высоких результатов.",
    },
    {
      src: "/src/assets/blog/post-2.png",
      date: "11.11.2023",
      title: "Мастер-класс по SEO для веб-разработчиков: Как повысить органический трафик и рейтинг вашего сайта с помощью SEO-стратегий.",
    },
    {
      src: "/src/assets/blog/post-3.png",
      date: "01.10.2023",
      title: "Эволюция веб-дизайна: вдохновляющие тренды и инновации, которые формируют будущее онлайн-пространства.",
    },
    {
      src: "/src/assets/blog/post-1.png",
      date: "24.02.2024",
      title: "Воплощение интерактивности: как использовать анимации, видео для привлечения внимания пользователей.",
    },
    {
      src: "/src/assets/blog/post-2.png",
      date: "10.02.2024",
      title: "Безопасность на первом месте: веб-разработка с учетом мер безопасности и защиты от угроз.",
    },
    {
      src: "/src/assets/blog/post-3.png",
      date: "30.01.2024",
      title: "Контент-маркетинг как двигатель роста: стратегии использования контента для привлечения клиентов.",
    },
  ];

  return (
    <div className="blog-page">
      <HeaderBlog />
      <div className="main">
        <Divider number='01' text='Блог' />
        <div className="blog-page__news">
          <Link to="" className="big-post">
            <img src="/src/assets/blog/posts/big-post.png" alt="blog picture" />
            <p>01.05.2024</p>
            <h4>Вперед в будущее веб-разработки: Горячие тренды и инновации, которые изменят игру</h4>
          </Link>
          <Mailing />
        </div>
        <div className="blog-page__grid">
          {articles.map((article, index) => (
            <Article key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;