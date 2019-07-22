import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component{

  render(){
    return(
      <div>
        <Link to='/About'>
          About
        </Link><br/>

        <Link to='/Projects'>
          Projects
        </Link><br/>

        <Link to='/Skills'>
          Skills
        </Link><br/>
        {/*// OPTION TO MAKE RESUME ANOTHER COMPONENT OF LINK TO PDF TO RESUME*/}
        <Link to='/Resume'>
          Resume
        </Link><br/>

      </div>

    )
  }

}

export default NavBar
