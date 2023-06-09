import logo from './logo.svg';
import './App.css';
import { FaBeer } from 'react-icons/fa';
import { AiFillAccountBook } from "react-icons/ai";
import { BsFillCloudHailFill } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FaBeer />
        <AiFillAccountBook />
        <BsFillCloudHailFill />
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
