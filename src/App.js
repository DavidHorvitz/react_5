import logo from './logo.svg';
import './App.css';
import TodayTime from './Componnets/TodayTime';
import DateStatic from './Componnets/DateStatic';
import Tableprop from './Componnets/Tableprop';
import InputViewer from './Componnets/InputViewer';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodayTime/>
        <DateStatic/>
      
    <Tableprop/>
  <InputViewer/>
      </header>
    </div>
  );
}

export default App;
