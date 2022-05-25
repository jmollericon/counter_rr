import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';


function App() {
  const counter = useSelector(state => state.counter);

  return (
    <div className="App">
      <header className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter: <code>{counter}</code></p>
      </header>
    </div>
  );
}

export default App;
