import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ReactPlayer from 'react-player';
import SimpleSnackbar from './snackbar.jsx';
import { updateVideoWidth } from '../actions/index.js';
import { STYLE_CONSTANTS } from '../utils/constants.jsx';


const styles = theme => ({
  card: {
    backgroundColor: '#000',
    borderRadius: 0,
    margin: 0,
    padding: 0,
    minWidth: 320
  },
  content: {
    padding: 0,
    backgroundColor: 'inherit'
  },

  actionContainer: {
    padding: '.25rem .25rem',
    marginBottom: '.75rem',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#000',
    color: '#fff'
  },
  upperActions: {
    width: '100%'
  },
  title: {
    flexGrow: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#fff',
    fontSize: 14,
    backgroundColor: '#000',
    flexWrap: 'wrap',
    fontWeight: '500'
  },
  lowerActions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '.25rem 0 0 0',
    fontSize: 12,
  },
  lowerLeftside: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  identityBar: {
    width: '160px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  creatorName: {
    color: STYLE_CONSTANTS.THEME_ACTIVE_COLOR,
    textDecoration: 'none'
  },
  statBar: {
    width: '160px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: '.25rem 0'
  },
  p: {
    margin: 0,
    color: STYLE_CONSTANTS.THEME_ACTIVE_COLOR,
    padding: '0 .5rem 0 .25rem'
  },
  controlBar: {
    width: 'calc(100% - 160px)'
  },

  controlIcon: {
    fontSize: '28px',
    position: 'relative',
    float: 'right',
    margin: '0 .5rem 0 0',
    paddingTop: '0.25rem'
  },
  player: {
    margin: 0,
    padding: 0
  }
})

class VideoCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showControls: false,
      likeColor: STYLE_CONSTANTS.THEME_INACTIVE_COLOR,
      bookmarkColor: STYLE_CONSTANTS.THEME_INACTIVE_COLOR,
      bookmarked: false,
      showSnackbar: false,
      snackbarMessage: '',
    }
    this.likeButton = React.createRef();

    this.enableControls = this.enableControls.bind(this)
    this.disableControls = this.disableControls.bind(this)
    this.disableControlsOnTouch = this.disableControlsOnTouch.bind(this)

    this.pressLikeButton = this.pressLikeButton.bind(this)
    this.pressBookmarkButton = this.pressBookmarkButton.bind(this)

    this.handleSnackbarClick = this.handleSnackbarClick.bind(this)
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this)
  }

  componentWillMount() {
    const { dispatch, width } = this.props
    if (window.innerWidth  < Number(width.replace('px', ''))) {
      dispatch(updateVideoWidth(window.innerWidth + 'px'))
    }
  }

  handleSnackbarClick(message) {
    this.setState({ showSnackbar: true, snackbarMessage: message });
  }

  handleSnackbarClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ showSnackbar: false });
  }

  enableControls() {
    this.setState({ showControls: true })
  }

  disableControls() {
    this.setState({ showControls: false })
  }

  pressLikeButton() {
    let newColor = null
    let message = this.state.snackbarMessage
    if (this.likeButton.current.props.style.color === STYLE_CONSTANTS.THEME_INACTIVE_COLOR) {
      newColor = STYLE_CONSTANTS.THEME_ACTIVE_COLOR
      message = 'Video liked'
    } else {
      newColor = STYLE_CONSTANTS.THEME_INACTIVE_COLOR
      message = 'Video disliked'
    }
    this.setState({ likeColor: newColor })
    this.handleSnackbarClick(message)
  }

  pressBookmarkButton() {
    const { bookmarked } = this.state;
    let newColor = null
    let message = this.state.snackbarMessage
    if (bookmarked === false) {
      newColor = STYLE_CONSTANTS.THEME_ACTIVE_COLOR
      message = 'Saved to your collection'
    } else {
      newColor = STYLE_CONSTANTS.THEME_INACTIVE_COLOR
      message = 'Removed from collection'
    }
    this.setState({ bookmarked: ! bookmarked, bookmarkColor: newColor })
    this.handleSnackbarClick(message)
  }

  disableControlsOnTouch() {
    setTimeout(
      () => { this.setState({ showControls: false }) }, 1500)
  }

  render() {
    const { classes, video, width } = this.props
    const { showControls, likeColor, bookmarked, bookmarkColor, showSnackbar, snackbarMessage } = this.state

    return (
      <div>
        <Card className={classes.card}>
          <CardContent
            className={classes.content}
            style={{width: width}}>
            <ReactPlayer
              onMouseEnter={() => this.enableControls()}
              onMouseLeave={() => this.disableControls()}
              onTouchStart={() => this.enableControls()}
              onTouchMove={() => this.enableControls()}
              onTouchEnd={() => this.disableControlsOnTouch()}
              onTouchCancel={() => this.disableControlsOnTouch()}
              className={classes.player}
              pip={true}
              url={video.url}
              width={width}
              height='100%'
              controls={showControls}
              config={{ file: {
                attributes: {
                  controlsList: 'nodownload',
                }
              }}}
            />
          </CardContent>
          <CardActions
            className={classes.actionContainer}
            style={{width: width}}>
            <div className={classes.upperActions}>
              <Typography
                className={classes.title}>
                {video.title}
              </Typography>
            </div>
            <div className={classes.lowerActions}>
              <div className={classes.lowerLeftside}>
                <div className={classes.identityBar}>
                  <b>From: </b>
                  <a
                    className={classes.creatorName}
                    href="/">
                    {video.creatorName}
                  </a>
                </div>
                <div className={classes.statBar}>
                  <b>Views: </b>
                  <p className={classes.p}>{video.viewsCount}</p>
                  <b style={{ paddingLeft: '.25rem' }}>Likes: </b>
                  <p className={classes.p}>{video.likesCount}</p>
                </div>
              </div>
              <div className={classes.controlBar}>
                <FavoriteIcon
                  className={classes.controlIcon}
                  ref={this.likeButton}
                  onClick={() => this.pressLikeButton()}
                  style={{ color: likeColor }}/>
                {bookmarked === false ?
                  <BookmarkIcon
                    className={classes.controlIcon}
                    style={{ color: bookmarkColor }}
                    onClick={() => this.pressBookmarkButton()}/> :
                  <BookmarkBorderIcon
                    className={classes.controlIcon}
                    style={{ color: bookmarkColor }}
                    onClick={() => this.pressBookmarkButton()}/>
                }
              </div>
            </div>
          </CardActions>
        </Card>
        <SimpleSnackbar
          open={showSnackbar}
          message={snackbarMessage}
          handleClose={this.handleSnackbarClose}/>
    </div>
    )
  }
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  const { control } = state
  const { width } = control
  return { width }
}

export default connect(
  mapStateToProps
)(withStyles(styles)(VideoCard))
