import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { isMobile } from 'react-device-detect';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import { DECK_NAME_LIST, DECK_PAGE_URI_LIST, STYLE_CONSTANTS } from '../utils/constants.jsx';
import { updateDeckLabel, updateDeckValue } from '../actions/index.js';


const styles = {
  root: {
    position: 'fixed',
    backgroundColor: '#000',
    bottom: 0,
    zIndex: 3,
    flexGrow: 1,
    width: '100%',
    height: STYLE_CONSTANTS.DECK_HEIGHT
  },
  tab: {
    minHeight: '55px',
    margin: 0,
    fontSize: '0.7rem',
    paddingTop: '5px',
    color: '#989494'
  }
};

class Deck extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, value) => {
    this.props.dispatch(updateDeckValue(value))
    this.props.dispatch(updateDeckLabel(DECK_NAME_LIST[value]))
    this.props.history.push(DECK_PAGE_URI_LIST[value])
  };

  render() {
    const { classes, deckValue } = this.props;

    return (
        <div>
          { isMobile === true ? (
              <Paper square className={classes.root}>
                <Tabs
                  value={deckValue}
                  onChange={this.handleChange}
                  variant="fullWidth"
                  indicatorColor="secondary"
                  textColor="secondary"
                  centered
                >
                  <Tab className={classes.tab} icon={<HomeIcon />} label={DECK_NAME_LIST[0]} />
                  <Tab className={classes.tab} icon={<SearchIcon />} label={DECK_NAME_LIST[1]} />
                  <Tab className={classes.tab} icon={<PersonPinIcon />} label={DECK_NAME_LIST[2]} />
                </Tabs>
              </Paper>
            ): null
          }
      </div>
    );
  }
}


const mapStateToProps = state => {
  const { control } = state
  const { deckValue, deckLabel } = control
  return { deckValue, deckLabel }
}

export default connect(
  mapStateToProps
)(withStyles(styles)(Deck))
