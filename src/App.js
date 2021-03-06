import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Trainers from './components/Trainers/Trainers';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path ='/'>
           <Home></Home>
         </Route>
          <Route path ='/home'>
           <Home></Home>
         </Route>
          <Route exact path ='/services'>
           <Services></Services>
         </Route>
          <Route exact path ='/contact'>
           <Contact></Contact>
         </Route>
          <Route exact path ='/about'>
           <About></About>
         </Route>
          <Route exact path ='/trainers'>
           <Trainers></Trainers>
         </Route>
          <Route exact path ='*'>
           <NotFound></NotFound>
         </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>          
    </div>
  );
}
export default App;
