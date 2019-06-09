import React, {Component} from 'react';
import { connect } from 'react-redux';
import './style.scss'
import heart from '../../assets/image/heart.png';
import message from '../../assets/image/message.png'
class LastReviews extends Component  {
    printReviews(reviews){
        let prinArray=[]
        reviews.forEach((element,index) => {
            console.log(typeof(element.reviw));
            
            prinArray.push(
                <div className='main__text' key={index}>
                    <h2 className='text_username'>{element.username}</h2>
                    <p className='text_date'>{element.date}</p>
                    <p className='text_review'>{element.reviw}</p>
                </div>
            )
        });
        return prinArray
    }
    render(){
        let {reviews}=this.props;
        return (
            <div className="lastReviews">
               <div className='lastReviews__header'>
                   <div className='lastReviews__header_text' >
                        <h2>Последние отзывы</h2>
                        <a href='#'>Все отзывы</a>
                   </div>
                   <div className='lastReviews__header_amount' >
                        <p><img src={heart} alt='heart'></img>131</p>
                        <p><img src={message} alt='message'></img>14</p>
                   </div>
               </div>
                <div className='lastReviews__main'>
                    {this.printReviews(reviews|| reviews.reviews)}
                </div>
            </div>
          );
    }
}

const mapStateToProps = state => ({
    reviews: state.reviews,
    i:state.i,
});

export default connect(mapStateToProps,null)(LastReviews)

