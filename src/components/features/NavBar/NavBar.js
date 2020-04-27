import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import Logo from '../../common/Logo/Logo';

class NavBar extends React.Component {
  render(){
    return(
      <nav className='navBar'>
        <div className='logoNav'>
          <Logo />
        </div>
        <div className='navLinks'>
          {/* <NavLink exact to='/'>Start</NavLink> */}
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