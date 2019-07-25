import React from 'react';

class Contact extends React.Component{
  render(){
    return(
      <div className='Contact bar' style={{background:'gray'}}>
        Contact Section aka Footer
        <br/>
        <a href='https://medium.com/@jacolam' >Blog </a>
        <a href='https://www.linkedin.com/in/jacolam/' >Linkedin </a>
        <a href='https://github.com/Jacolam' > Github </a>
        <a href='' > Email </a>
      </div>
    )
  }
}


export default Contact;
