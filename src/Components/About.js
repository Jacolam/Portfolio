import React from 'react';

class About extends React.Component{
  render(){
    return(
      <div style={{background:'gray'}}>
        <div className='About container' style={{background:'gray'}}>
          About Me<br/>
          I am full-stack web developer with experience in JavaScript, React/Redux, Ruby on Rails and an engineer background. Having a chronically curious mind, I fostered  passions for solution development, troubleshooting, and technological innovation. This fascination was further spurred by my time working at Tesla, helping me realize that software melded my three passions together. I enrolled to Flatiron School to embark on my journey as a software developer.
          <br/>
          When I'm not coding, you'll find me eating, cooking, eating what I cooked, working out, and playing  videogames.
        </div>
      </div>
    )
  }
}

// BACKGROUND IS FOR DEV , CHANGE IT
export default About;
