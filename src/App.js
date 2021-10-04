import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header';
import SpecialTreat from './components/SpecialTreat/SpecialTreat';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SpecialTreat></SpecialTreat>
      <Courses></Courses>
    </div>
  );
}

export default App;
