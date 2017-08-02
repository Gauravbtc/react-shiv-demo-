import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Navigation, {NavLink} from 'react-navigate';
//import '../node_modules/react-navigate/src/Navigation.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
