import { Link } from "react-router-dom";

const Post = ({ src, data, title, avatar, name, position, }) => {
  return (
    <Link to='/blog/1' className="blog__post">
      <img className="post-image" src={src} alt="AuraWeb post" />
      <p className="blog__post-data">{data}</p>
      <h4>{title}</h4>
      <div className="blog__post-author">
        <img className="blog__post-avatar" src={avatar} alt="AuraWeb post author" />
        <div>
          <h5>{name}</h5>
          <p>{position}</p>
        </div>
      </div>
    </Link>
  );
}

export default Post;