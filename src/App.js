import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import Countries from './Components/Countries/Countries';
import About from './Components/Header/About/About';
import Contact from './Components/Contact/Contact';
import CountryDetail from './Components/CountryDetail/CountryDetail';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/countries'>
          <Countries></Countries>
        </Route>
        <Route path='/country/:countryName'>
          <CountryDetail></CountryDetail>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route exact path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
