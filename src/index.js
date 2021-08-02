import React from 'react';
import ReactDOM from 'react-dom';

// import HooksApp from './HooksApp';
// import CounterApp from 'components/01-useState/CounterApp';
import CounterWithCustomHook from 'components/01-useState/CounterWithCustomHook';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);
