import React from "react";
import "./Portfolio.scss";
import PageTitle from "../../common/PageTitle/PageTitle";
// import img1 from "./bcd.png";
import img1 from "../../../images/bcd.png";
import img2 from "../../../images/panel_adm.png";
import img3 from "../../../images/rps.png";
import img4 from "../../../images/local_weather.jpg";
import img5 from "../../../images/group_project.png";
import img6 from "../../../images/new_wave.png";
import img7 from "../../../images/czatap_port.png";
import img8 from "../../../images/Covid-19 Counter.png";
import img9 from "../../../images/Numerologia.png";
import img10 from "../../../images/Picture_shop.png";
import img11 from "../../../images/toDoApp.png";

const portfolioDB = {
  title: "portfolio",
  projects: [
    {
      name: "Betty Craft Designs",
      img: img1,
      code: "https://github.com/Zyar3k/online_shop_bcd",
      demo: "https://online-shop-bcd.herokuapp.com/",
      desc:
        "Indywidualny projekt na zakończenie Bootcampu Web Developer Plus. Tech stack: MERN - MongoDB, Express, React (Redux, Router), Node.js | Sass | CRA - webpack | npm | Yarn.",
    },
    {
      name: "Cz@-App",
      img: img7,
      code: "https://github.com/Zyar3k/your_chat_app/tree/master",
      demo: "https://youthful-clarke-0b8301.netlify.app/",
      desc:
        "Aplikacja czatowa w czasie rzeczywistym Tech stack: HTML | Sass | RWD | React | Express | Node | Socket.IO | CRA- webpack | git | Yarn.",
    },
    {
      name: "statystyki CovID-19",
      img: img8,
      code: "https://github.com/Zyar3k/covid-19_counter",
      demo: "https://covid-19-counter.netlify.app/",
      desc:
        "Aplikacja pozwalająca śledzić na bieżąco statystyki dotyczące Covid-19. Tech stack: HTML | Sass | RWD | React | API | npm Scripts.",
    },
    {
      name: "kamień - papier - nożyce",
      img: img3,
      code: "https://github.com/Zyar3k/rock-paper-scissors",
      demo: "https://zyar3k.github.io/rock-paper-scissors/",
      desc:
        "Pierwsza gra napisana w JavaScript wyświetlająca wynik rozgrywki. Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts.",
    },
    {
      name: "numerologia",
      img: img9,
      code: "https://github.com/Zyar3k/numerology_4.0.0",
      demo: "https://numerologia.netlify.app/",
      desc:
        "Aplikacja pozwalająca poznać swoje specjalne liczby i sprawdzić wibracje numerologiczne na dwoolny dzień/miesiąc. Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts.",
    },
    {
      name: "picture shop",
      img: img10,
      code: "https://github.com/Zyar3k/picture_shop",
      demo: "https://picture-shop.netlify.app/",
      desc:
        "Strona z elementami portfolio fotografa. Działający koszyk i zwalidowany formularz wiadomości. Tech stack: HTML | Sass | RWD | JavaScript ES5 | npm Scripts.",
    },
    {
      name: "Aplikacja pogodowa",
      img: img4,
      code: "https://github.com/Zyar3k/local_weather_app",
      demo: "https://agitated-aryabhata-cef99e.netlify.app/",
      desc:
        "Aplikacja pogodowa z użyciem API - wyświetlająca aktualną pogodę w szukanym mieście. Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | Yarn.",
    },
    {
      name: "panel administracyjny",
      img: img2,
      code: "https://github.com/Zyar3k/Solo-project",
      demo: "https://zyar3k.github.io/Solo-project/#",
      desc:
        "Pierwszy indywidualny projekt napisany podczas Bootcampu Web Developer Plus na podstawie pliku PSD od grafika. Tech stack: HTML | Sass | RWD | JavaScript ES5 | Photoshop | npm Scripts.",
    },
    {
      name: "Projekt grupowy",
      img: img5,
      code: "https://github.com/Zyar3k/kodilla_group_project",
      demo: "https://stupefied-lewin-977cb1.netlify.com/",
      desc:
        "Projekt grupowy - symulacja pracy w grupie z innymi junior Front-end developerami. Każdy z uczestników wybierał/miał przydzielane zadania. Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | git | Jira | kanban | Yarn.",
    },
    {
      name: "Do zrobienia!",
      img: img11,
      code: "https://github.com/Zyar3k/todo_react_app",
      demo: "https://dozrobienia-app.netlify.app/",
      desc:
        "Aplikacja ToDo - aplikacja stworzona w React. Priorytety i ukończone zadania. Tech stack: HTML | Sass | RWD | React | CRA- webpack | git | Yarn.",
    },
    {
      name: "New Wave festival",
      img: img6,
      code: "https://github.com/Zyar3k/newwavefestival-feb2020",
      demo: "https://secure-woodland-63361.herokuapp.com/",
      desc:
        "Projekt treningowy - praca skupiona na backendowej stronie projektu oraz połączenie front i backendu. Tech stack: HTML | Sass | RWD | React | API | CRA- webpack | git | Yarn.",
    },
  ],
};

const portfolioElements = portfolioDB.projects.map((item, index) => (
  <div key={index} className='portfolioBox'>
    <p className='portfolioTitle'>{item.name}</p>
    <div className='imgWrapper'>
      <img src={item.img} alt='img' />
      <div className='portfolioBtns'>
        <a
          href={item.code}
          target='_blank'
          rel='noopener noreferrer'
          className='portfolioBtn'
        >
          kod
        </a>
        <a
          href={item.demo}
          target='_blank'
          rel='noopener noreferrer'
          className='portfolioBtn'
        >
          demo
        </a>
      </div>
    </div>
    <p className='portfolioDesc'>{item.desc}</p>
  </div>
));

const Portfolio = () => {
  return (
    <div className='pageContent'>
      <PageTitle>{portfolioDB.title}</PageTitle>
      <div className='portfolio'>{portfolioElements}</div>
    </div>
  );
};

export default Portfolio;
