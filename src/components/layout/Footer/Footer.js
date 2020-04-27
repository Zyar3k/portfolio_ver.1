import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {

  render(){

    return(
      <div className='footer'>
        <div className='footDesktop'>
          <span>copyright Zyar3k - 2020</span>
          <span>
            <a href='https://www.linkedin.com/in/arkadiusz-zygan/' target="_blank" rel="noopener noreferrer" className='contactBox'>
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/Zyar3k' target="_blank" rel="noopener noreferrer" className='contactBox'>
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='mailto:a.zygan@gmail.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </span>
        </div>
      </div>
    );
  };
};

export default Footer;