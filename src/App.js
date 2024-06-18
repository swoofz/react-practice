import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="txt-center">
      <div className="absolute card">
        <p className="txt-light txt-wrap absolute m1">lorem ipsum dolor sit amets lorem lorem ipsum dolor sit amets lorem lorem ipsum dolor sit amets lorem lorem ipsum dolor sit amets lorem lorem ipsum dolor sit amets lorem lorem ipsum dolor sit amets lorem lorem ipsum dolor sit amets lorem</p>
      </div>

      <p className="absolute txt-light m1 fade-in-text">Fade In</p>

      <header className="flex align-center justify-center col App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="absolute title">React Practice</h1>
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
      </header>
    </div>
  );
}

export default App;
