import logo from './logo.svg';
import './App.css';
// import ReduxPage from './pages/ReduxPage';
import WReduxPage from './pages/WReduxPage';
import WHookPage from './pages/WHookPage';

function App() {
  return (
    <div className="App">
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
      </header> */}
      {/* <ReduxPage/> */}
      
      <WReduxPage/>
      <WHookPage/>
    </div>
  );
}

export default App;
