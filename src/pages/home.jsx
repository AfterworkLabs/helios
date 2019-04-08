import React, { Component } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { isMobile } from 'react-device-detect';
import Grid from '@material-ui/core/Grid';
import Nav from '../components/nav.jsx';
import VideoCard from '../components/video_card.jsx';
import SideMenu from '../components/side_menu.jsx';
import NavigationTab from '../components/navigation_tab.jsx';
import { STYLE_CONSTANTS } from '../utils/constants.jsx';
import video1 from '../assets/sample_videos/sample1.mp4';
import video2 from '../assets/sample_videos/sample2.mp4';
import video3 from '../assets/sample_videos/sample3.mp4';
import video4 from '../assets/sample_videos/sample4.mp4';
import video5 from '../assets/sample_videos/sample5.mp4';
import video6 from '../assets/sample_videos/sample6.mp4';
import video7 from '../assets/sample_videos/sample7.mp4';
import video8 from '../assets/sample_videos/sample8.mp4';
import video9 from '../assets/sample_videos/sample9.mp4';
import video10 from '../assets/sample_videos/sample10.mp4';
import video11 from '../assets/sample_videos/sample11.mp4';
import video12 from '../assets/sample_videos/sample12.mp4';


const videos = [
  {
    title: 'Stupid dog stupid owner',
    url: video1,
    viewsCount: 1,
    likesCount: 12,
    tags: ['news', 'sports', 'home made'],
    creatorName: 'John Doe'
  },
  {
    title: 'Here we go, pheeew',
    url: video2,
    viewsCount: 2,
    likesCount: 11,
    tags: ['sports'],
    creatorName: 'Michael Jackson'
  },
  {
    title: 'Passion ?',
    url: video3,
    viewsCount: 3,
    likesCount: 10,
    tags: ['news', 'international', 'sports'],
    creatorName: 'David Hart'
  },
  {
    title: 'Sample super long tile Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever Whatever 4',
    url: video4,
    viewsCount: 4,
    likesCount: 9,
    tags: ['trendy', 'sports'],
    creatorName: 'Jenny Harrison'
  },
  {
    title: 'Gundam dumbass vs dumbass',
    url: video5,
    viewsCount: 5,
    likesCount: 8,
    tags: ['news', 'headline', 'fashion', 'travel', 'beauty', 'x-sports', 'men', 'gear', 'whatever'],
    creatorName: 'Joey Doe'
  },
  {
    title: 'White german shepherd',
    url: video6,
    viewsCount: 6,
    likesCount: 7,
    tags: ['food'],
    creatorName: 'Dennis Olson'
  },
  {
    title: '来点中文试试水',
    url: video7,
    viewsCount: 7,
    likesCount: 6,
    tags: ['news', 'sports'],
    creatorName: 'Oliver Mil'
  },
  {
    title: '再来点颜文字 @^@',
    url: video8,
    viewsCount: 8,
    likesCount: 5,
    tags: ['news', 'sports'],
    creatorName: '路人甲'
  },
  {
    title: '想不出名字了',
    url: video9,
    viewsCount: 9,
    likesCount: 4,
    tags: ['news', 'sports'],
    creatorName: 'Goorge Googin'
  },
  {
    title: 'Some 3D shit',
    url: video10,
    viewsCount: 10,
    likesCount: 3,
    tags: ['sports', 'soccer'],
    creatorName: 'Rachel Reg'
  },
  {
    title: '刚大木',
    url: video11,
    viewsCount: 11,
    likesCount: 2,
    tags: ['news', 'sports', 'beauty'],
    creatorName: 'Nancy Doe'
  },
  {
    title: 'yay yay yay',
    url: video12,
    viewsCount: 12,
    likesCount: 1,
    tags: ['travel'],
    creatorName: '无名氏'
  },
]

const styles = {
  container: {
    backgroundColor: '#000',

  },
  gridContainer: {
    padding: 0,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div
        className={classes.container}
        style={ isMobile === true ?
          { padding: 0 } : { padding: `${STYLE_CONSTANTS.DECK_HEIGHT} 0 0 0`}}>
        <Nav props={this.props}/>
        <SideMenu />
          <Grid
            container
            className={classes.gridContainer}
            justify="center"
            >
          {
            videos.map(video => (
              <VideoCard key={video.title} video={video} />
            ))
          }
          </Grid>
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
)(withStyles(styles)(Home))
