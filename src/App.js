import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
import { lodable } from 'react-loadable';

const loadingComponent = ()=> <h3>Loading wait...</h3>

const Home = lodable({
  loader:()=> import(/*webpackChunkName:'Home'*/ './Home'),
  loading:loadingComponent
})
const About = lodable({
  loader:()=> import(/*webpackChunkName:'About'*/'./About'),
  loading:loadingComponent
})

function App() {
  return (
    <div>
      <h1 className='error'>Webpack + React Test code</h1>
      <div>
        <button Link to ='/home'>Home</button>
        <button Link to ='/about'>About</button>
      </div>
      <br></br>
      <BrowserRouter>
        <Router>
          <Route path='home' Component={Home}/>
          <Route path='about' Component={About}/>
        </Router>
      </BrowserRouter>
      <div className='App-header'>
        <img src='{logo}' className='App-logo' alt='logo'></img>
      </div>
    </div>
    
  );
}

export default App;
