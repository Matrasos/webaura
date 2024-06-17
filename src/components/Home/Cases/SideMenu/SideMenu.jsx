import { useEffect } from 'react';

const SideMenu = ({ selectedCase, onClose }) => {
  useEffect(() => {
    document.body.classList.add('lock');
    return () => {
      document.body.classList.remove('lock');
    };
  }, []);

  return (
    <div className="side-menu">
      <button onClick={onClose}>Close</button>
      <h2>{selectedCase.title}</h2>
      {selectedCase.src && <img src={selectedCase.src} alt={selectedCase.title} />}
      <div className="side-menu-chips">
        {selectedCase.chips.map((chip, index) => (
          <div key={index}>{chip}</div>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: selectedCase.description }}></div>
      <h3>Tasks</h3>
      <p>{selectedCase.tasks}</p>
      <h3>Solutions</h3>
      <ul>
        {selectedCase.solutions.map((solution, index) => (
          <li key={index}>{solution}</li>
        ))}
      </ul>
      <h3>Results</h3>
      <ul>
        {selectedCase.results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
