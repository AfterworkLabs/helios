import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { STYLE_CONSTANTS } from '../utils/constants';

const styles = theme => ({
  root: {
    // backgroundColor: green[600],
  },
  close: {
    color: STYLE_CONSTANTS.THEME_INACTIVE_COLOR,
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends Component {
  render() {
    const { classes, open, message, handleClose } = this.props;

    return (
      <div>
        <Snackbar
          className={classes.root}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={2000}
          onClose={() => handleClose()}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              className={classes.close}
              onClick={() => handleClose()}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(SimpleSnackbar);
