import React from 'react';

const divStyle = {
  padding: '15px',
  background: 'gray'
};

class Contact extends React.Component{

  render(){
    return(
      <div className='Contact bar' style={divStyle}>
        <br/>
        <img
          src='https://pngimg.com/uploads/linkedIn/linkedIn_PNG32.png'
          alt="Linkedin"
          height="36"
          width="36"
          onClick={() => window.open(`https://www.linkedin.com/in/jacolam/`)}
          />
        <img
          src='https://png.pngtree.com/svg/20150313/c71a9c699d.svg'
          alt="github"
          height="42"
          width="42"
          onClick={() => window.open(`https://github.com/Jacolam`)}
          />
        <img
          src='https://miro.medium.com/max/390/1*emiGsBgJu2KHWyjluhKXQw.png'
          alt="Medium"
          height="36"
          width="36"
          onClick={() => window.open(`https://medium.com/@jacolam`)}
          />
        <img
          src='https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/612/aiga_mail_bg-512.png'
          alt="Email"
          height="36"
          width="36"
          onClick={() => window.open(`https://medium.com/@jacolam`)}
          />
        <p>Designed by Jacob Lam</p>
      </div>
    )
  }
}

export default Contact;
