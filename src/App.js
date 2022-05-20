import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter: <code>100</code></p>
      </header>
    </div>
  );
}

export default App;
