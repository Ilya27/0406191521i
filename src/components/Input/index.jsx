import React, {Component} from 'react';
import {AddReview} from '../../store/action';
import { connect } from 'react-redux';
import './style.scss'
class Input extends Component  {
    state={
        value:'',
    }
    onChange = event => this.setState({ value: event.target.value })

    keyPress = event => {
        if (event.keyCode === 13 && event.ctrlKey) {
            if(this.state.value){
                let {AddReview} = this.props;
                AddReview(this.state.value);
                this.setState({value:''});
            }
        }
    }

    onClick = () =>{
        if(this.state.value){
            let {AddReview} = this.props;
            AddReview(this.state.value);
            this.setState({value:''});
        }
    }

    render(){
        return (
            <div className="add_review">
                <div className='add_review__input_container'>
                    <textarea onKeyDown={this.keyPress} onChange={this.onChange} value={this.state.value}></textarea>
                </div>
                <div className='add_review__button_container'>
                    <button className='button_container__button' onClick={this.onClick} >Написать консультанту</button>
                </div>
            </div>

          );
    }
}
export default connect(null,{AddReview})(Input)
