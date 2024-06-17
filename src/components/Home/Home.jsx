import { useState } from 'react';
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
import SideMenu from "./Cases/SideMenu/SideMenu";

const Home = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseData = {
    'mindray': {
      title: 'Mindray 23',
      chips: ['WINTER 23', '2023'],
      description: '<span>WINTER 23</span> - магазин зимней одежды...',
      tasks: 'Увеличить узнаваемость бренда...',
      solutions: [
        'Разработана инновационная механика...',
        'При регистрации чека на games.5ka.ru...'
      ],
      results: [
        'Компания WINTER 23 успешно осуществила...',
        'Регистрация чека на платформе games.5ka.ru...'
      ]
    },
    'winter': {
      title: 'Winter 23',
      chips: ['WINTER 23', '2023'],
      description: '<span>WINTER 23</span> - магазин зимней одежды...',
      tasks: 'Увеличить узнаваемость бренда...',
      solutions: [
        'Разработана инновационная механика...',
        'При регистрации чека на games.5ka.ru...'
      ],
      results: [
        'Компания WINTER 23 успешно осуществила...',
        'Регистрация чека на платформе games.5ka.ru...'
      ]
    },
    // другие кейсы
  };

  return (
    <div className="home wrapper">
      <Header />
      <Hero />
      <main className="main">
        <div className="main-container">
          <Cases selectedCase={selectedCase} setSelectedCase={setSelectedCase} caseData={caseData} />
          <Services />
          <Team />
          <About />
          <Reviews />
          <Technologies />
          <Posts />
        </div>
      </main>
      <Footer />
      {selectedCase && (
        <SideMenu selectedCase={caseData[selectedCase]} onClose={() => setSelectedCase(null)} />
      )}
    </div>
  );
}

export default Home;
