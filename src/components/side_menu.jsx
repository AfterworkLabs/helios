import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { openDrawer, closeDrawer } from '../actions/index.js'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { DECK_NAME_LIST, DECK_PAGE_URI_LIST } from '../utils/constants.jsx';

const drawerWidth = 320

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
})

class SideMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
  }

  handleDrawerOpen = () => {
    this.props.dispatch(openDrawer())
  }

  handleDrawerClose = () => {
    this.props.dispatch(closeDrawer())
  }

  render() {
    const { classes, theme, drawer_open } = this.props

    return (
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={drawer_open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => this.handleDrawerClose()}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {DECK_NAME_LIST.map((text, index) => (
              <Link  key={text} to={DECK_PAGE_URI_LIST[index]} style={{ textDecoration: 'none' }}>
              <ListItem button>
                <ListItemIcon>
                  <div>
                    {index === 0 ? <HomeIcon /> : null}
                    {index === 1 ? <SearchIcon /> : null}
                    {index === 2 ? <PersonPinIcon /> : null}
                  </div>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
    )
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  const { control } = state
  const { drawer_open } = control
  return { drawer_open }
}

export default connect(
  mapStateToProps
)(withStyles(styles, { withTheme: true })(SideMenu))
