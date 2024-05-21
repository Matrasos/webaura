import Header from "./Header/Header";

const Home = () => {
  return (
    <div className="home wrapper">
      <Header />
      <div className="hero">
        <h1><span>web</span> aura</h1>
        <p>
          которые позволяют расти, зарабатывать и быть лидерами.
          <br />
          Создаем функциональные сайты и проекты,
        </p>
      </div>
    </div>
  );
}

export default Home;