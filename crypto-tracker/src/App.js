import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import SingleCurrency from './components/SingleCurrency';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Notes from './components/Notes'

import AddNote from './components/AddNote';
const routes = [
  {
    path: "/",
    exact: true,
    main: Home
  },
  {
    path: "/currency/:symbol",
    exact: true,
    main: SingleCurrency
  }

];

class App extends Component {
  state = {
    notes: [
      { id: 1, text: "NOTES:" },

    ]
  }
  deleteNote = (id) => {
    const notes = this.state.notes.filter(note => {
      return note.id !== id
    });
    this.setState({
      notes: notes
    });
  }

  addNote = (note) => {
    note.id = Math.random();
    let notes = [...this.state.notes, note];
    this.setState({
      notes: notes
    });
  }
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
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
        <AddNote addNote={this.addNote} />
      </React.Fragment>
    )
  }
};

export default App;
