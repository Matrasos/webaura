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
      title: 'Mindray Resona I9',
      chips: [1, 2, 3],
      description: '...',
      tasks: '...',
      solutions: [
        '...',
        '...'
      ],
      results: [
        '...',
        '...'
      ]
    },
    'winter': {
      title: 'WINTER 23’',
      chips: [4, 5],
      description: '...',
      tasks: '...',
      solutions: [
        '...',
        '...'
      ],
      results: [
        '...',
        '...'
      ]
    },
    'autowise': {
      title: 'Autowise Avenue',
      chips: [6, 7, 8, 9],
      description: '...',
      tasks: '...',
      solutions: [
        '...',
        '...'
      ],
      results: [
        '...',
        '...'
      ]
    },
    'coffeo': {
      title: 'Coffeo',
      chips: [6, 7, 8, 9],
      description: '...',
      tasks: '...',
      solutions: [
        '...',
        '...'
      ],
      results: [
        '...',
        '...'
      ]
    },
    'cozy': {
      title: 'Cozy Home',
      chips: [6, 7, 8, 9],
      description: '...',
      tasks: '...',
      solutions: [
        '...',
        '...'
      ],
      results: [
        '...',
        '...'
      ]
    },
    'green': {
      title: 'Green Grove',
      chips: [6, 7, 8, 9],
      description: '...',
      tasks: '...',
      solutions: [
        '...',
        '...'
      ],
      results: [
        '...',
        '...'
      ]
    },
    'arthub': {
      title: 'Художественная школа ArtHub',
      chips: [6, 7, 8, 9],
      description: '...',
      tasks: '...',
      solutions: [
        '...',
        '...'
      ],
      results: [
        '...',
        '...'
      ]
    },
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
