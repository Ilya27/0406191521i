import React, {Component} from 'react';
import Mark from './components/Mark/index'
import './style.scss';

class Rating extends Component  {
    render(){
        return (
            <div className='rating_container'>
                <p>Услуг</p>
                <div className='rating' >
                  <div className='manualBooking'>
                    <Mark number={11} name="Ручное бронирование"/>
                  </div>
                  <div className='packageTours'>
                    <Mark number={3} name="Пакетные туры"/>
                  </div>
                  <div сlssName='hotels'>
                    <Mark number={1} name="Отели"/>
                  </div>
              </div>
              <h2 className='max_mark'>15</h2>
              <h2>Всего</h2>
            </div>
          );
    }
}

export default Rating;
