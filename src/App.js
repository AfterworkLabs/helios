import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';
import Explore from './pages/explore.jsx';
import Profile from './pages/profile.jsx';
import { updateDeckLabel, updateDeckValue } from './actions/index.js';
import { DECK_NAME_LIST, DECK_PAGE_URI_LIST } from './utils/constants.jsx';


class App extends Component {
  componentDidMount() {
      const { dispatch, history } = this.props;

      let currentPath = '/'
      let currentPathIndex = 0

      for (let i = 0; i <= DECK_PAGE_URI_LIST.length; i++) {
          if (window.location.href.includes(DECK_PAGE_URI_LIST[i]) && DECK_PAGE_URI_LIST[i] !== '/') {
            currentPath = DECK_PAGE_URI_LIST[i]
            currentPathIndex = i
          }
      }

      dispatch(updateDeckLabel(DECK_NAME_LIST[currentPathIndex]));
      dispatch(updateDeckValue(currentPathIndex));
      history.push(currentPath);

      window.onpopstate = () => {
        const { dispatch } = this.props;
        let currentPathIndex = 0

        for (let i = 0; i <= DECK_PAGE_URI_LIST.length; i++) {
            if (window.location.href.includes(DECK_PAGE_URI_LIST[i]) && DECK_PAGE_URI_LIST[i] !== '/') {
              currentPathIndex = i
            }
        }

        dispatch(updateDeckLabel(DECK_NAME_LIST[currentPathIndex]));
        dispatch(updateDeckValue(currentPathIndex));
      };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  const { control } = state
  const { deckValue, deckLabel } = control
  return { deckValue, deckLabel }
}

export default withRouter(connect(
  mapStateToProps
)(App))
