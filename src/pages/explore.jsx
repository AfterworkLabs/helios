import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { isMobile } from 'react-device-detect';
import Paper from '@material-ui/core/Paper';
import Nav from '../components/nav.jsx';
import SideMenu from '../components/side_menu.jsx';
import NavigationTab from '../components/navigation_tab.jsx';
import CategoryImageList from '../components/category_list.jsx';
import { STYLE_CONSTANTS } from '../utils/constants.jsx';

const styles = theme => ({
  container: {
    backgroundColor: '#000',
    position: 'relative'
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  // upperPaper: {
  //   position: 'relative',
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 0,
  // },
  midPaper: {
    // marginTop: '1rem',
    // marginBottom: '1rem',
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  lowerPaper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    backgroundColor: '#000',
  },
});

class Explore extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div
        className={classes.container}
        style={ isMobile === true ?
          { padding: 0, width: '100%' } :
          { padding: `${STYLE_CONSTANTS.DECK_HEIGHT} 0 0 0`, width: '70%', left: '15%'}}>
        <SideMenu />
        <Nav props={this.props} />
          <div className={classes.subContainer}>

            <Paper className={classes.midPaper}>
              <CategoryImageList />
            </Paper>

          </div>
        <NavigationTab history={this.props.history}/>
      </div>
    )
  }
}

// <Paper className={classes.upperPaper}>
//   <Carousel />
// </Paper>

// <Paper className={classes.lowerPaper}>
//   <SearchBar />
// </Paper>


const mapStateToProps = state => {
  const { control } = state
  const { drawer_open } = control
  return { drawer_open }
}

export default connect(
  mapStateToProps
)(withStyles(styles)(Explore));
