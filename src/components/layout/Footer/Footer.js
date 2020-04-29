import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {

  render(){

    return(
      <div className='footer'>
        <div className='footDesktop'>
          <div className='leftFoot'>copyright Zyar3k - 2020</div>
          <div className='rightFoot'>
            <a href='https://www.linkedin.com/in/arkadiusz-zygan/' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/Zyar3k' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='mailto:a.zygan@gmail.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>        
        <div className='footMobile'>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/contact'>Kontakt</Link>
        </div>
      </div>
    );
  };
};

export default Footer;