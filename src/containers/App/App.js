import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import About from '../../containers/About/About';
import Work from '../../containers/Work/Work';
import WhyMe from '../../containers/WhyMe/WhyMe';
import GridTest from '../../containers/grid/Grid';
import NotFound from '../../containers/NotFound/NotFound';
import './App.css';

const App = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work/:item" component={Work} />
        <Route path="/why-me" component={WhyMe} />
        <Route path="/grid" component={GridTest} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
