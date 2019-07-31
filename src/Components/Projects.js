import React from 'react';

class Projects extends React.Component{

  renderProjects = () => {

  }

  render(){
    return(
      <div className='Projects bar container'>
        <div>
          <div style={{display:'flex'}}>
            <div>
              <h5>Don't Forget About Me</h5>
              DFAM is a relationship management application, that helps you set reminders to reach out and connect with our friends and family. DFAMs goals is to help you build healthier and more meaningful relationships.

              <div>
                <button onClick={ () => window.open(`https://github.com/Jacolam/dfamv2-frontend`)}>
                  Front-End
                </button>
                <button onClick={ () => window.open(`https://github.com/Jacolam/dfamv2-backend`)}>
                  Back-End
                </button>
                <button onClick={ () => window.open(`https://github.com/Jacolam/dfamv2-frontend`)}>
                  Demo
                </button>
              </div>

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

              <div>
                <button onClick={ () => window.open(`https://github.com/Jacolam/bobafinder-frontend`)}>
                  Front-End
                </button>
                <button onClick={ () => window.open(`https://medium.com/@jacolam`)}>
                  Demo
                </button>
              </div>

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

              <div>
                <button onClick={ () => window.open(`https://github.com/Jacolam/zombie-diner-front-end`)}>
                  Front-End
                </button>
                <button onClick={ () => window.open(`https://github.com/Jacolam/zombie-diner-backend`)}>
                  Back-End
                </button>
                <button onClick={ () => window.open(`https://raw.githubusercontent.com/Jacolam/zombie-diner-front-end/master/zombie-diner.gif`)}>
                  Demo
                </button>
              </div>

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
