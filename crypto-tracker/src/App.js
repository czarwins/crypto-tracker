import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import SingleCurrency from './components/SingleCurrency';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    main: Home
  },
  {
    path: "/currency/",
    exact: true,
    main: SingleCurrency
  }

];

class App extends Component {
  render() {
    return (
      <React.Fragment >
        <Router>
          <Navigation />
          <div>
            {
              // Your Content
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))
            }
          </div>
        </Router>
      </React.Fragment>
    )
  }
};

export default App;
