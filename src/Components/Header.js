import React from 'react';

const divStyle = {
  backgroundImage: `url(https://i.pinimg.com/originals/e8/c9/df/e8c9df3391c56187e8ebb909f33da143.jpg)`,
  backgroundSize: '100vw 50vh',
};

class Header extends React.Component{
  render(){
    return(
      <div className='header content-block' style={divStyle}>
        <h1>Jacob Lam</h1>
        <p> Full-Stack Web Developer</p>
      </div>
    )
  }
}

export default Header;
