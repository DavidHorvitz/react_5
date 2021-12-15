import logo from './logo.svg';
import './App.css';
import TodayTime from './Componnets/TodayTime';
import DateStatic from './Componnets/DateStatic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodayTime/>
        <DateStatic/>
     
      </header>
    </div>
  );
}

export default App;
