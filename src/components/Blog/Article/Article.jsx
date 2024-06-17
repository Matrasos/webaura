import { Link } from "react-router-dom";

const Article = ({ src, date, title }) => {
  return (
    <Link to='/blog/1' className="blog-page__post">
      <img className="image" src={src} alt="AuraWeb post" />
      <p className="blog-page__post-data">{date}</p>
      <h4>{title}</h4>
    </Link>
  );
}

export default Article;