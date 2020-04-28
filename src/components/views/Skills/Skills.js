import React from 'react';
import './Skills.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSass, faHtml5, faCss3, faJs, faBootstrap, faReact, faNode, faMdb, faGitAlt, faNpm, faYarn, faJira} from '@fortawesome/free-brands-svg-icons';

class Skills extends React.Component {

  render(){

    return(
      <div className='pageContent'>
        <PageTitle>wciąż się rozwijam</PageTitle>
        <div className='skills'>
          
        <div className='skillsSection'>
          <div className='sectionTitle'>
          FRONT-END
          </div>
          <div className='skillsContent'>
            <div className='iconBox html5'>
              <FontAwesomeIcon  icon={faHtml5} className='icon' />
              <div className='skillName'>HTML5</div>
            </div>
            <div className='iconBox css'>
              <FontAwesomeIcon  icon={faCss3} className='icon' />
              <div className='skillName'>CSS</div>
            </div>
            <div className='iconBox sass'>
              <FontAwesomeIcon  icon={faSass} className='icon' />
              <div className='skillName'>Sass</div>
            </div>
            <div className='iconBox bootstrap'>
              <FontAwesomeIcon  icon={faBootstrap} className='icon' />
              <div className='skillName'>Bootstrap</div>
            </div>
            <div className='iconBox js'>
              <FontAwesomeIcon  icon={faJs} className='icon' />
              <div className='skillName'>JavaScript</div>
            </div>
            <div className='iconBox react'>
              <FontAwesomeIcon  icon={faReact} className='icon' />
              <div className='skillName'>React+Redux</div>
            </div>
          </div>
        </div>

        <div className='skillsSection'>
          <div className='sectionTitle'>
          BACK-END
          </div>
          <div className='skillsContent'>
            <div className='iconBox node'>
              <FontAwesomeIcon  icon={faNode} className='icon' />
              <div className='skillName'>Node.js - Express</div>
            </div>
            <div className='iconBox mongo'>
              <FontAwesomeIcon  icon={faMdb} className='icon' />
              <div className='skillName'>MongoDB</div>
            </div>
          </div>
        </div>

        <div className='skillsSection'>
            <div className='sectionTitle'>
            TOOLS
            </div>
            <div className='skillsContent'>
              <div className='iconBox git'>
                <FontAwesomeIcon  icon={faGitAlt} className='icon' />
                <div className='skillName'>Git</div>
              </div>
              <div className='iconBox npm'>
                <FontAwesomeIcon  icon={faNpm} className='icon' />
                <div className='skillName'>npm</div>
              </div>
              <div className='iconBox yarn'>
                <FontAwesomeIcon  icon={faYarn} className='icon' />
                <div className='skillName'>yarn</div>
              </div>
              <div className='iconBox jira'>
                <FontAwesomeIcon  icon={faJira} className='icon' />
                <div className='skillName'>Jira</div>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  };
};

export default Skills;