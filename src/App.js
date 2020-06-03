import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavHeader from './components/NavHeader'
import Footer from './components/Footer'
import HomePage from '../src/components/Body'
import Projects from './components/Projects'
import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import ContextProvider from './Context'
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="home">

    <ContextProvider>
    <NavHeader />
    <Switch>        
      <Route exact path='/' component={HomePage} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/about' component={About} />
      <Route component={Error} />
    </Switch>
    <Footer />
    </ContextProvider>
    
    </div>
  );
}

export default App;
