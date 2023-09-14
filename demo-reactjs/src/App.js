import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile';
import Clock from './components/clock/clock';
import Sum from './components/sum/sum';
import WorldClock from './components/world-clock/world-clock';

function App() {
  return (
    <div className="App">
      <Clock />
      <Profile />
      <Sum />
      <WorldClock />
    </div>
  );
}

export default App;
