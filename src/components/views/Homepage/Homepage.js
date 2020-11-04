import React from "react";
import "./Homepage.scss";
import img1 from "../../../images/head.jpg";

const homeDB = {
  quote:
    "Sukces niekoniecznie osiąga najlepszy, tylko ten, kto potrafi otoczyć się najlepszymi",
  author: "Carla Montero",
  img: img1,
  texts: [
    "chcę się uczyć",
    "chcę się rozwijać",
    "wiem, że wiele nauki przede mną",
    "cel jest drogą ciągłego rozwoju",
  ],
};

const texts = homeDB.texts.map((item, index) => <div key={index}>{item}</div>);

const Homepage = () => {
  return (
    <div className='pageContent'>
      <div className='homepage'>
        <div className='homeText'>
          <div className='quotetext'>{homeDB.quote}</div>
          <div className='quoteAuthor'>{homeDB.author}</div>
        </div>
        <div className='imgHomeWrapper'>
          <div className='imgHome'>
            <img src={homeDB.img} alt='img' />
          </div>
          <div className='imgTextWrapper'>{texts}</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
