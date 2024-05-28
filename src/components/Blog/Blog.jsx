import { Link } from "react-router-dom";
import Divider from "components/Home/Divider/Divider";
import HeaderBlog from "./HeaderBlog/HeaderBlog";
import Mailing from "./Mailing/Mailing";

const Blog = () => {
  return (
    <div className="blog">
      <HeaderBlog />
      <div className="main">
        <Divider number='01' text='Блог' />
        <div className="blog__news">
          <Link to="" className="big-post">
            <img src="/src/assets/blog/posts/big-post.png" alt="blog picture" />
            <p>01.05.2024</p>
            <h4>Вперед в будущее веб-разработки: Горячие тренды и инновации, которые изменят игру</h4>
          </Link>
          <Mailing />
        </div>
      </div>
    </div>
  );
}

export default Blog;