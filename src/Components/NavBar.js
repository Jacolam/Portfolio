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
      <div className='bar'>
        <button onClick={this.scrollToLocation}>
          About
        </button>

        <button onClick={this.scrollToLocation}>
          Projects
        </button>

        <button onClick={this.scrollToLocation}>
          Skills
        </button>

        <button onClick={this.scrollToLocation}>
          Resume
        </button>

        <button onClick={this.scrollToLocation}>
          Contact
        </button>

      </div>
    )
  }
}

export default NavBar;
