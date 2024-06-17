const Article = ({ src, date, title }) => {
  return (
    <div className="blog-page__post">
      <img className="image" src={src} alt="AuraWeb post" />
      <p className="blog-page__post-data">{date}</p>
      <h4>{title}</h4>
    </div>
  );
}

export default Article;