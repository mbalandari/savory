import { useState } from 'react';
import './App.css';
import one from './img/1.jpg';
import two from './img/2.jpg';
import three from './img/3.jpg';
import four from './img/4.jpg';
import five from './img/5.jpg';
import six from './img/6.jpg';
import seven from './img/7.jpg';



const images = [one, two, three, four, five, six, seven];

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="App">
      <div className='title'>
        <h1>Jolly</h1>
        <h2>A photography project <br /> by Maz & Chasseur</h2>
      </div>
      <div className="image-container">
        <img src={images[0]} alt="Chasseur" />
      </div>
    </div>
  );
}

export default App;
