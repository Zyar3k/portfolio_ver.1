import React from 'react';
import './Homepage.scss';
import img1 from './head.jpg';

class Homepage extends React.Component {

  render(){

    return(
      <div className='pageContent'>
        <div className='homepage'>
          <div className='homeText'>
            <div className='quotetext'>Sukces niekoniecznie osiąga najlepszy, tylko ten, kto potrafi otoczyć się najlepszymi</div>
            <div className='quoteAuthor'>Carla Montero</div>
          </div>
          <div className='imgHomeWrapper'>
            <div className='imgHome'>
              <img src={img1} alt='img' />
            </div>
            <div className='imgTextWrapper'>
              <div>chcę się uczyć</div>
              <div>chcę się rozwijać</div>
              <div>wiem, że wiele nauki przede mną</div>
              <div>cel jest drogą ciągłego rozwoju</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Homepage;