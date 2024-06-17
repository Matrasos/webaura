import { useEffect, useState } from 'react';
import Divider from './Divider';

const SideMenu = ({ selectedCase, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedCase) {
      document.body.classList.add('lock');
      setTimeout(() => setIsVisible(true), 10); // небольшая задержка для проигрывания анимации
    } else {
      document.body.classList.remove('lock');
      setIsVisible(false);
    }

    return () => {
      document.body.classList.remove('lock');
    };
  }, [selectedCase]);

  return (
    <>
      {isVisible && (
        <div className="side-menu-overlay"></div>
      )}
      <div className={`side-menu ${isVisible ? 'open' : ''} ${selectedCase ? 'visible' : ''}`}>
        <button onClick={onClose}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="black" />
            <path d="M30 10L10 30M10 10L30 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <h2 className='side-menu-subtitle'>Кейсы</h2>

        {selectedCase && (
          <>
            <h2 className='side-menu-title'>{selectedCase.title}</h2>

            <div className="side-menu-chips">
              {selectedCase.chips.map((chip, index) => (
                <div key={index}>{chip}</div>
              ))}
            </div>

            <div className='side-menu-description' dangerouslySetInnerHTML={{ __html: selectedCase.description }}></div>

            <Divider />

            <h3 className='side-menu-title__common'>Задачи</h3>

            {selectedCase.tasks.map((task, index) => (
              <p className='side-menu-tasks-text' key={index}>{task}</p>
            ))}

            <Divider />

            <h3 className='side-menu-title__common'>Решения</h3>

            <ul className='side-menu-solution'>
              {selectedCase.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>

            <Divider />

            <h3 className='side-menu-title__common'>Итог</h3>

            <ul className='side-menu-result'>
              {selectedCase.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>

            <div className="side-menu-data">{selectedCase.data}</div>

          </>
        )}
      </div>
    </>
  );
}

export default SideMenu;
