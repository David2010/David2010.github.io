import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router-dom'
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
 