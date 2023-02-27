import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Title from './components/Title'
import Image from './components/Image'
import Reach from './components/Reach'
import Main from './components/Main'

function App() {
  return (
    <div className='card_body'>
      <div className='outer-card'>
        <Image />
        <div className="card">
          <Title />
          <Reach />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
