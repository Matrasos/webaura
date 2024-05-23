import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";
import Post from "./Post/Post";

const Posts = () => {
  let posts = [
    {
      src: "/src/assets/blog/post-1.png",
      data: "01.05.2024",
      title: "Погружение в последние тенденции в веб-дизайне: Цветовые палитры, шрифты и анимация",
      avatar: "/src/assets/blog/avatar-1.png",
      name: "Мукашева Айнур",
      position: "главный редактор"
    },
    {
      src: "/src/assets/blog/post-1.png",
      data: "01.05.2024",
      title: "Погружение в последние тенденции в веб-дизайне: Цветовые палитры, шрифты и анимация",
      avatar: "/src/assets/blog/avatar-1.png",
      name: "Мукашева Айнур",
      position: "главный редактор"
    },
    {
      src: "/src/assets/blog/post-1.png",
      data: "01.05.2024",
      title: "Погружение в последние тенденции в веб-дизайне: Цветовые палитры, шрифты и анимация",
      avatar: "/src/assets/blog/avatar-1.png",
      name: "Мукашева Айнур",
      position: "главный редактор"
    },
  ];
  return (
    <div className="blog">
      <Divider number='07' text='БЛОГ' />
      <div className="blog__grid">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
      <Link className="blog__link" to="/blog">
        <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.7199 8.70711C40.1104 8.31658 40.1104 7.68342 39.7199 7.29289L33.356 0.928932C32.9654 0.538408 32.3323 0.538408 31.9417 0.928932C31.5512 1.31946 31.5512 1.95262 31.9417 2.34315L37.5986 8L31.9417 13.6569C31.5512 14.0474 31.5512 14.6805 31.9417 15.0711C32.3323 15.4616 32.9654 15.4616 33.356 15.0711L39.7199 8.70711ZM0 9L39.0128 9V7L0 7L0 9Z" fill="white" />
        </svg>
      </Link>
    </div>
  );
}

export default Posts;