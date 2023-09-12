import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile';
import Clock from './components/clock/clock';
import Sum from './components/count/count';

function App() {
  return (
    <div className="App">
      <Clock />
      <Profile />
      <Sum />
    </div>
  );
}

export default App;
