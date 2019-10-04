import React from 'react';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Header from './Components/Header';
import './StyleSheet.css';
// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div id="App">
      <Header />
      <NavBar/>
      <About/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
