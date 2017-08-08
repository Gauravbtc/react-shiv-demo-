import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Navigation, {NavLink} from 'react-navigate';
//import '../node_modules/react-navigate/src/Navigation.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
registerServiceWorker();
