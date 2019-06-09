import React, {Component} from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import {store} from './store/store'
import InfoManager from './components/InfoManager/index';
import Rating from './components/Rating/index';
import LastReviews from './components/LastReviews/index';
import Input from './components/Input/index';
import './App.css';

class App extends Component  {
    render(){
        return (
            <div className="main">
              <InfoManager/>
              <Rating/>
              <Provider store = { store }>
                <LastReviews/>
                <Input/>
              </Provider>
            </div>
          );
    }
}

export default App;
