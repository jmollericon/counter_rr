import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const counter = useSelector(state => state.counter);
  const dispath = useDispatch();

  const increment = () => {
    dispath({ type: 'INC' });
  };
  const decrement = () => {
    dispath({ type: 'DEC' });
  };

  return (
    <div className="App">
      <header className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter: <code>{counter}</code></p>
        <div className="buttons-container">
          <button className="App-button" onClick={increment}>+</button>
          <button className="App-button" onClick={decrement}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
