import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './MobileMenu.styled';

const MobileMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">start</Link>
      <Link to="/about">o mnie</Link>
      <Link to="/skills">umiejętności</Link>
      <Link to="/portfolio">portfolio</Link>
      <Link to="/contact">kontakt</Link>
    </StyledMenu>
  );
};

MobileMenu.propTypes = {
  open: bool.isRequired,
};

export default MobileMenu;