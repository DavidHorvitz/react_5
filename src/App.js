import logo from './logo.svg';
import './App.css';
import TodayTime from './Componnets/TodayTime';
import DateStatic from './Componnets/DateStatic';
import Tableprop from './Componnets/Tableprop';
import InputViewer from './Componnets/InputViewer';
import Counter from './Componnets/Counter';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter/>
        <TodayTime/>
        <DateStatic/>
      
    <Tableprop/>
  <InputViewer/>
      </header>
    </div>
  );
}

export default App;
