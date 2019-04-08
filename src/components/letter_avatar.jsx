import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { STYLE_CONSTANTS } from '../utils/constants';

const styles = {
  container: {
    backgroundColor: 'transparent'
  },
  avatar: {
    height: '60px',
    width: '60px',
    color: '#fff',
    backgroundColor: STYLE_CONSTANTS.THEME_ACTIVE_COLOR,
  }
};

function LetterAvatars(props) {
  const { classes } = props;
  return (
    <Grid
      className={classes.container}
      container
      justify="center"
      alignItems="center">
      <Avatar className={classes.avatar}>SF</Avatar>
    </Grid>
  );
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);
