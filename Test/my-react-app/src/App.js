import logo from './logo.svg';
import './App.css';
import Contact from './Contact';


import { animals } from './animals';

const title = '';
const background =<img className='background' alt='ocean' src='/images/ocean.jpg'/>
const imgs = [];
for (const a in animals) {
  const img = <img key={a} className='animal' alt={a} src={animals[a].image} aria-label={a} role='button' onMouseOver={displayFact}/>
  imgs.push(img)
}

function displayFact(e){
  let idx = Math.floor(Math.random()* 3) ;
  let fun = animals[e.target.alt].facts[idx];
  document.getElementById('fact').innerHTML = fun;
}


function App() {
  return <Contact/>;
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <h1>{title!==''?title:'Click an animal for a fun fact'}</h1>
      {background}
      <div className ='animals'>
        {imgs}
      </div>
      <p id='fact'>Testing 1234</p>
    </div>
  );
}

export default App;
