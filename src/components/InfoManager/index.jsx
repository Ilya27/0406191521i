import React, {Component} from 'react';         
import './style.scss';

class InfoManager extends Component  {
    render(){
        return (
            <div className="info_manager">
                <div className='image_container'>

                </div>
                <div  className='name_container'>
                    <h2>Вероника Ростова</h2>
                    <p>Менеджер по продажам</p>
                </div>
                <div  className='services_container'>
                    <h3>Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны</h3>
                </div>
            </div>
          );
    }
}

export default InfoManager;
