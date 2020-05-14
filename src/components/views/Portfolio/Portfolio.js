import React from 'react';
import './Portfolio.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import img1 from './bcd.png';
import img2 from './panel_adm.png';
import img3 from './rps.png';
import img4 from './local_weather.jpg';
import img5 from './group_project.png';
import img6 from './new_wave.png';
import img7 from './czatap_port.png';
import img8 from './Covid-19 Counter.png';

class Portfolio extends React.Component {

  render(){

    return(
      <div className='pageContent'>
        <PageTitle>portfolio</PageTitle>
        <div className='portfolio'>
          <div className='portfolioBox'>
            <p className='portfolioTitle'>Betty Craft Designs</p>
            <div className='imgWrapper'>
              <img src={img1} alt='img' />
              <div className='portfolioBtns'>
                <a href='https://github.com/Zyar3k/online_shop_bcd' className='portfolioBtn'>kod</a>
                <a href='https://online-shop-bcd.herokuapp.com/' className='portfolioBtn'>demo</a>
              </div>
            </div>
            <p className='portfolioDesc'>Indywidualny projekt na zakończenie Bootcampu Web Developer Plus. Tech stack: MERN - MongoDB, Express, React (Redux, Router), Node.js | Sass | CRA - webpack | npm | Yarn.</p>
          </div>
          <div className='portfolioBox'>
            <p className='portfolioTitle'>Cz@-App</p>
            <div className='imgWrapper'>
              <img src={img7} alt='img' />
              <div className='portfolioBtns'>
                <a href='https://github.com/Zyar3k/your_chat_app/tree/master' className='portfolioBtn'>kod</a>
                <a href='https://youthful-clarke-0b8301.netlify.app/' className='portfolioBtn'>demo</a>
              </div>
            </div>
            <p className='portfolioDesc'>Aplikacja czatowa w czasie rzeczywistym  Tech stack: HTML | Sass | RWD | React | Express | Node | Socket.IO | CRA- webpack | git | Yarn.</p>
          </div>
          <div className='portfolioBox'>
            <p className='portfolioTitle'>statystyki CovID-19</p>
            <div className='imgWrapper'>
              <img src={img8} alt='img' />
              <div className='portfolioBtns'>
                <a href='https://github.com/Zyar3k/covid-19_counter' className='portfolioBtn'>kod</a>
                <a href='https://agitated-aryabhata-cef99e.netlify.app/' target='_blank' rel='noopener noreferrer' className='portfolioBtn'>demo</a>
              </div>
            </div>
            <p className='portfolioDesc'>Aplikacja pozwalająca śledzić na bieżąco statystyki dotyczące Covid-19. Tech stack: HTML | Sass | RWD | React | API | npm Scripts.</p>
          </div>
          <div className='portfolioBox'>
            <p className='portfolioTitle'>Aplikacja pogodowa</p>
            <div className='imgWrapper'>
              <img src={img4} alt='img' />
              <div className='portfolioBtns'>
                <a href='https://github.com/Zyar3k/local_weather_app' className='portfolioBtn'>kod</a>
                <a href='https://agitated-aryabhata-cef99e.netlify.app/' className='portfolioBtn'>demo</a>
              </div>
            </div>
            <p className='portfolioDesc'>Aplikacja pogodowa z użyciem API - wyświetlająca aktualną pogodę w szukanym mieście. Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | Yarn.</p>
          </div>
          <div className='portfolioBox'>
            <p className='portfolioTitle'>kamień - papier - nożyce</p>
            <div className='imgWrapper'>
              <img src={img3} alt='img' />
              <div className='portfolioBtns'>
                <a href='https://github.com/Zyar3k/rock-paper-scissors' className='portfolioBtn'>kod</a>
                <a href='https://zyar3k.github.io/rock-paper-scissors/' className='portfolioBtn'>demo</a>
              </div>
            </div>
            <p className='portfolioDesc'>Pierwsza gra napisana w JavaScript wyświetlająca wynik rozgrywki. Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts.</p>
          </div>
          <div className='portfolioBox'>
            <p className='portfolioTitle'>panel administracyjny</p>
            <div className='imgWrapper'>
              <img src={img2} alt='img' />
              <div className='portfolioBtns'>
                <a href='https://github.com/Zyar3k/Solo-project' className='portfolioBtn'>kod</a>
                <a href='https://zyar3k.github.io/Solo-project/#' target='_blank' rel='noopener noreferrer' className='portfolioBtn'>demo</a>
              </div>
            </div>
            <p className='portfolioDesc'>Pierwszy indywidualny projekt napisany podczas Bootcampu Web Developer Plus na podstawie pliku PSD od grafika. Tech stack: HTML | Sass | RWD | JavaScript ES5 | Photoshop | npm Scripts.</p>
          </div>
          <div className='portfolioBox'>
            <p className='portfolioTitle'>Projekt grupowy</p>
            <div className='imgWrapper'>
              <img src={img5} alt='img' />
              <div className='portfolioBtns'>
                <a href='https://github.com/Zyar3k/kodilla_group_project' className='portfolioBtn'>kod</a>
                <a href='https://stupefied-lewin-977cb1.netlify.com/' className='portfolioBtn'>demo</a>
              </div>
            </div>
            <p className='portfolioDesc'>Projekt grupowy - symulacja pracy w grupie z innymi junior Front-end developerami. Każdy z uczestników wybierał/miał przydzielane zadania.  Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | git | Jira | kanban | Yarn.</p>
          </div>
          <div className='portfolioBox'>
            <p className='portfolioTitle'>New Wave festival</p>
            <div className='imgWrapper'>
              <img src={img6} alt='img' />
              <div className='portfolioBtns'>
                <a href='https://github.com/Zyar3k/newwavefestival-feb2020' className='portfolioBtn'>kod</a>
                <a href='https://secure-woodland-63361.herokuapp.com/' className='portfolioBtn'>demo</a>
              </div>
            </div>
            <p className='portfolioDesc'>Projekt treningowy - praca skupiona na backendowej stronie projektu oraz połączenie front i backendu.  Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | git | Yarn.</p>
          </div>
        </div>
      </div>
    );
  };
};

export default Portfolio;