import React from 'react';
// import { Link } from 'react-router-dom'

class NavBar extends React.Component{

  scrollToLocation = (e) => {
    var loc = e.target.innerText
    var selected = document.querySelector(`.${loc}`)
    selected.scrollIntoView({block: 'start', behavior: 'smooth'})
  }

  render(){
    return(
      <div className='nav-bar'>
        <button onClick={this.scrollToLocation} class="btn btn-primary btn-sm">
          About
        </button>

        <button onClick={this.scrollToLocation} class="btn btn-primary btn-sm">
          Projects
        </button>

          <a href="https://drive.google.com/file/d/1wyU3h3Ze4MsjbqUE1Jz8neANVej5uZMc/view?usp=sharing" class="btn btn-primary btn-sm">Resume</a>

        <button class="btn btn-primary btn-sm" onClick={this.scrollToLocation}>
          Contact
        </button>

      </div>
    )
  }
}

export default NavBar;
