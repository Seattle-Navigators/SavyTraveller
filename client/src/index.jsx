import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const currentUrl = new URL(window.location.href);
const attractionId = currentUrl.pathname;

ReactDOM.render(
  <App  attractionId={attractionId} />, 
  document.getElementById('app'),
);
