import React from 'react';

class Projects extends React.Component{

  renderProjects = () => {

  }

  render(){
    return(
      <div className='Projects bar container'>
        Projects
        <div>
          <div style={{display:'flex'}}>
            <div>
              <h5>Don't Forget About Me</h5>
              DFAM is a relationship management application, that helps you set reminders to reach out and connect with our friends and family. DFAMs goals is to help you build healthier and more meaningful relationships.
            </div>
            <div>
              more stuf this is another container
              should import image of DFAM
            </div>
          </div>
          <br/>
          <div style={{display:'flex'}}>
            <div>
              more stuf this is another container
              should import image of Boba finder
            </div>
            <div>
              <h5>Boba Finder</h5>
              Have you ever had a craving for bubble tea but you didn't know where the closest one was? Now you can locate the all of the stores within the 5 boroughs!
            </div>
          </div>
          <br/>
          <div style={{display:'flex'}}>
            <div>
              <h5>Zombie Diner</h5>
              Zombies are hungry, clear all the food orders by adding the right ingredients to the plate before serving them.
              Can you clear all the orders before the time runs out?
              <br/>
              *Zombie Diner was built in two days for Flatiron School's 2019 Game Jam and won "Funniest Game".*
            </div>
            <div>
              more stuf this is another container
              should import image of  Zombie Diner
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Projects;
