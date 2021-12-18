
import './App.css';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';

function App() {
  const [stars, setStars] = useState([])
  const array = [];

  useEffect(() => {
    for (let i=0; i < 500 ; i++ ) {
      array.push('.')
    } setStars(array);
  }, [])


  return (
    <div className="App">
      <Nav />
      
      {/* <div className='lined thin'>
        <h4>- take out the trash</h4>
        <h4>- do the dishes</h4>
        <h4>- update resume</h4>
      </div> */}
              <div className='night-sky'>
          {stars.map((star, idx) => 
            <p key={idx} style={{top: `${Math.random()*100}vh`, right: `${Math.random()*400}vw`, fontSize: `${Math.random()*20}px`}} className='star'>{star}</p>
          )}
        </div>
        <div className='slow' >
          {stars.map((star, idx) => 
            <p key={idx} style={{top: `${Math.random()*100}vh`, right: `${Math.random()*400}vw`, fontSize: `${Math.random()*20}px`}} className='star'>{star}</p>
          )}
        </div>
        <div className='globe-container'>
        <div className='night-sky-container'>
      </div>
      <div className='moon'>
        <p className='moon'>once upon a time</p>
      </div>
        </div>

    </div>
  );
}

export default App;
