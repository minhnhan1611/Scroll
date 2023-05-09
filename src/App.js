import React, { useRef } from 'react';
import './App.css';

function App() {
  const imageContainerRef = useRef(null);

  const handleClick = (index) => {
    const imageContainer = imageContainerRef.current;
    const imgNode = imageContainer.querySelectorAll('ul > li')[index];
    imgNode.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  };

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <span onClick={() => handleClick(0)}>Tom</span>
          </div>
          <div className="col-4">
            <span onClick={() => handleClick(1)}>Jerry</span>
          </div>
          <div className="col-4">
            <span onClick={() => handleClick(2)}>Dog</span>
          </div>
        </div>
        <ul ref={imageContainerRef} className="image-container mt-5" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <li>
            <img src="./img/tom.png" alt="tom" />
          </li>
          <li>
            <img src="./img/jerry.png" alt="jerry" />
          </li>
          <li>
            <img src="./img/dog.png" alt="dog" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
