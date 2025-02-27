import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="title">404</h1>
      <Link to='/'><button className="services-btn">Домой</button></Link>
    </div>
  );
}

export default NotFound;