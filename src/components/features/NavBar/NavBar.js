import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends React.Component {

  render(){

    return(
      <nav className='navBar'>
        <div className='logoNav'>
          <NavLink exact to='/'>LOGO</NavLink>
        </div>
        <div className='navLinks'>
          <NavLink exact to='/'>Start</NavLink>
          <NavLink to='/about'>O mnie</NavLink>
          <NavLink to='/skills'>Umiejętności</NavLink>
          <NavLink to='/portfolio'>Portfolio</NavLink>
          <NavLink to='/contact'>Kontakt</NavLink>
        </div>
      </nav>
    );
  };
};

export default NavBar;