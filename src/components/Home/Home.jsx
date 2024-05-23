import Header from "./Header/Header";
import Cases from "./Cases/Cases";
import Services from "./Services/Services";
import Team from "./Team/Team";
import About from "./About/About";
import Reviews from "./Reviews/Reviews";
import Technologies from "./Technologies/Technologies";
import Posts from "./Posts/Posts";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

const Home = () => {

  return (
    <div className="home wrapper">
      <Header />
      <Hero />
      <main className="main">
        <div className="main-container">
          <Cases />
          <Services />
          <Team />
          <About />
          <Reviews />
          <Technologies />
          <Posts />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;