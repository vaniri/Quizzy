import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';

const renderApplication = () => {
  ReactDOM.render(
    <Home /> ,
    document.querySelector('#root')
  );
}

renderApplication(Home);