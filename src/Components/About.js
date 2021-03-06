import React from 'react';

const divStyle = {
  padding: '30px 10px',
  background: 'gray'
};

class About extends React.Component{
  render(){
    return(
      <div style={divStyle}>
        <div className='About container bar' style={{background:'gray'}}>
          <h4>About Me</h4>
          <br/><br/>
          I am a full-stack web developer with experience in JavaScript, React/Redux,and Ruby on Rails with an engineer background. Having a chronically curious mind, I fostered  passions for solution development, troubleshooting, and technological innovation. This fascination was further spurred by my time working at Tesla, helping me realize that software melded my three passions together. I enrolled to Flatiron School to embark on my journey as a software developer.
          <br/><br/>
          When I'm not coding, you'll find me eating, cooking, eating what I cooked, working out, or playing  videogames.
          <br/><br/>
          I'm always looking to help strategize, create, or execute on new and interesting projects. Reach out if you need help with your next website or app.
        </div>
      </div>
    )
  }
}

// BACKGROUND IS FOR DEV , CHANGE IT
export default About;
