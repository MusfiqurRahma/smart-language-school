import './App.css';
import Courses from './components/Courses/Courses';
import FindCourse from './components/FindCourse/FindCourse';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import SpecialTreat from './components/SpecialTreat/SpecialTreat';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SpecialTreat></SpecialTreat>
      <Courses></Courses>
      <FindCourse></FindCourse>
      <Footer></Footer>
    </div>
  );
}

export default App;
