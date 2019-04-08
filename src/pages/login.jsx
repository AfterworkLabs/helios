import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Nav from '../components/nav.jsx';
import SideMenu from '../components/side_menu.jsx';
import NavigationTab from '../components/navigation_tab.jsx';

const styles = theme => ({
  container: {
    backgroundColor: '#000',
  }
});

class Login extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container} >
        <SideMenu />
        <Nav props={this.props} />
          <b style={{color: '#fff'}}>Login Page</b>
        <NavigationTab history={this.props.history}/>
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
)(withStyles(styles)(Login));
