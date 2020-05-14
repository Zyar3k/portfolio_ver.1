import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../../common/PageTitle/PageTitle';

import Plpin from './pin_pl.png';
import Ukpin from './pin_uk.png';

class Contact extends React.Component {

  render(){

    return(
      <div className='pageContent'>
        <PageTitle>Napisz do mnie</PageTitle>
        <div className='contact'>
          <div className='boxWrapper'>
            <div  className='contactBox'>
              <div className='pinWrapper'>
                <a href='https://drive.google.com/file/d/1d2C9pub8Kvj9UCHmJDoG0_JCUtyKupmu/view' target="_blank" rel="noopener noreferrer">
                  <img src={Plpin} alt='pin' className='pin' />
                </a>
                <div><FontAwesomeIcon className='icon cv' icon={faFilePdf} /></div>
                <a href='https://drive.google.com/open?id=1sixNne4mGrT94aVRdj6vGBRf9OMkvZHp' target="_blank" rel="noopener noreferrer">
                  <img src={Ukpin} alt='pin' className='pin' />
                </a>
              </div>
              <div className='contactTitle'>Curriculum Vitae</div>
            </div>
            <a href='https://www.linkedin.com/in/arkadiusz-zygan/' target="_blank" rel="noopener noreferrer" className='contactBox'>
              <FontAwesomeIcon className='icon in' icon={faLinkedin} />
              <div className='contactTitle'><span>linkedin.com/in/</span><span>arkadiusz-zygan</span></div>
            </a>
          </div>
          <div className='boxWrapper'>
            <a href='https://github.com/Zyar3k' target='_blank' rel='noopener noreferrer' className='contactBox'>
              <FontAwesomeIcon className='icon git' icon={faGithub} />
              <div className='contactTitle'>github.com/Zyar3k</div>
            </a>
            <a href='mailto:a.zygan@gmail.com' target='_blank' rel='noopener noreferrer' className='contactBox'>
              <FontAwesomeIcon className='icon mail' icon={faEnvelope} />
              <div className='contactTitle'>a.zygan@gmail.com</div>
            </a>
          </div>
        </div>
      </div>
    );
  };
};

export default Contact;