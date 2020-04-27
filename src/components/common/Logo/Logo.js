import React from 'react';
import './Logo.scss';
import {NavLink} from 'react-router-dom';

const Logo = () => (
  <NavLink exact to='/' className='logo'>
    <div className='logoText'>Zygan</div>
    <div className='logoText'>Arek</div>
  </NavLink>
);

export default Logo;