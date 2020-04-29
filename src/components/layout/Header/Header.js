import React, { useState } from 'react';
import './Header.scss';
import NavBar from '../../features/NavBar/NavBar';
import Burger from '../../common/Burger/Burger';
import MobileMenu from '../../features/MobileMenu/MobileMenu';

function Header() {

  const [open, setOpen] = useState(false);
  return(
    <div className='header'>
      <Burger open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <NavBar />
    </div>
  );
};

export default Header;