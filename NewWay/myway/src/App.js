import logo from './logo.svg';
import './App.css';
import Highway from './component/Highway';
import Stayaway from './component/Stayaway';

function App() {

  let fromapp = 'stay away with props';
  let fromapp2 = 'stay away with props2';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Highway data={fromapp} />
        <Stayaway data={fromapp2} />
      </header>
    </div>
  );
}

export default App;
