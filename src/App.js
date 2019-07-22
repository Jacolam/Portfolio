import React from 'react';
import NavBar from './Components/NavBar'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div id="App">
      Hello this will be my portfolio!
      <NavBar/>
      <About/><br/>
      <Projects/><br/>
      <Skills/><br/>
      <Contact/>

    </div>
  );
}

export default App;
