import React, {Component} from 'react';
import './style.scss';

class Mark extends Component  {
    letStyle(number){
        if(number>15) return null;
        let color=''
        let width=Math.round(((number*100)/15)*10)/10;
        number < 5 ? color='rgb(172,226,248)' : color='rgb(177,225,155)';
        return {
            width:width+"%",
            background: color,
            height:"24px",
        }
    }
    render(){
        return (
            <div className="mark">
                <div className="mark__strip" style={this.letStyle(this.props.number)}></div>
                <p className="mark__number">{this.props.number}</p>
                <p className="mark__name">{this.props.name}</p>
            </div>
          );
    }
}

export default Mark;