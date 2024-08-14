
import './App.css';
import TaskWrapper from './components/TaskWrapper';
import Header from './components/Header';
import Weather from './components/Weather';






function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <Weather />
      <TaskWrapper/>
  
    </div>
  );
}

export default App;
