import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isBrowser } from 'react-device-detect';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { openDrawer, closeDrawer } from '../actions/index.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    backgroundColor: '#000',
    zIndex: '2',
    width: '100%',
    flexGrow: 1,

    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 5,
  },

});

class Nav extends Component {
  constructor(props) {
    super(props)
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
  }

  handleDrawerOpen = () => {
    this.props.dispatch(openDrawer())
  };

  handleDrawerClose = () => {
    this.props.dispatch(closeDrawer())
  };

  render() {
    const { classes, drawer_open } = this.props

    return (
      <div>
        { isBrowser === true ? (
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: drawer_open,
              })}>
            <Toolbar
              disableGutters={!drawer_open}>
              <IconButton
                onClick={() => this.handleDrawerOpen()}
                className={classNames(classes.menuButton, drawer_open && classes.hide)}
                color="inherit"
                aria-label="Menu"
              >
              <MenuIcon />
              </IconButton>
              <Typography
                className={classes.grow}
                variant="h6"
                color="inherit"
              >
                Impulse Reality
              </Typography>
            </Toolbar>
          </AppBar>
        ): null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { control } = state
  const { drawer_open } = control
  return { drawer_open }
}

export default connect(
  mapStateToProps
)(withStyles(styles)(Nav))
