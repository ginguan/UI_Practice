import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/Home'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Pricing from './screens/Pricing';
import Payment from './screens/Payment';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
   <Route exact path="/" component={Home} />
   <Route path="/Payment" component={Payment} />
   <Route path="/Pricing" component={Pricing} />
 </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
