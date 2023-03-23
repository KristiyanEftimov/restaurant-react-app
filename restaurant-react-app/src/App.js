import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu';
import Header from './Layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
     
      {/* <header className="App-header">
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
        <Menu />
      </header> */}
    </div>
  );
}

export default App;
