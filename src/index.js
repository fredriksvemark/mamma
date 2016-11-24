import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import ReactDOM from 'react-dom';

import './index.css';

//Pages
import App from './App';
import About from './pages/About/About'
import Paintings from './pages/Paintings/Paintings'
import Main from './pages/Main/Main'
import Contact from './pages/Contact/Contact'

ReactDOM.render((
  <div className="body">
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path='/main' component={Main} />
        <Route path='/paintings' component={Paintings} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </Route>
  </Router>
  </div>
), document.getElementById('root'))

