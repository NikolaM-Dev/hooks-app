import React from 'react';
import ReactDOM from 'react-dom';

// import HooksApp from './HooksApp';
import CounterApp from 'components/01-useState/CounterApp';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);
