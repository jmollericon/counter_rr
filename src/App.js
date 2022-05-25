import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';

function App() {
  const counter = useSelector(state => state.counter);
  const dispath = useDispatch();

  const increment = () => {
    dispath(actions.increment());
  };
  const decrement = () => {
    dispath(actions.decrement());
  };
  const addBy = () => {
    dispath(actions.addBy(10));
  }

  return (
    <div className="App">
      <header className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter: <code>{counter}</code></p>
        <div className="buttons-container">
          <button className="App-button" onClick={increment}>Increment</button>
          <button className="App-button" onClick={decrement}>Decrement</button>
          <button className="App-button" onClick={addBy}>Add By 10</button>
        </div>
      </header>
    </div>
  );
}

export default App;
