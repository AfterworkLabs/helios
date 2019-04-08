import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import tileData from './tileData';

import image1 from '../assets/sample_images/image1.png';
import image2 from '../assets/sample_images/image2.jpg';
import image3 from '../assets/sample_images/image3.jpg';


const tileData = [
  {
    img: image1,
    title: 'MILF',
    author: 'John doe',
    cols: 1.5,
  },
  {
    img: image2,
    title: 'Hardcore',
    author: 'John doe',
    cols: 1.5,
  },
  {
    img: image3,
    title: 'Gay',
    author: 'John doe',
    cols: 1,
  },
  {
    img: image1,
    title: 'Japanese',
    author: 'John doe',
    cols: 2,
  },
  {
    img: image3,
    title: 'Street pick up',
    author: 'John doe',
    cols: 2,
  },
  {
    img: image2,
    title: 'Whatever',
    author: 'John doe',
    cols: 1,
  },
  {
    img: image1,
    title: 'Homemade',
    author: 'John doe',
    cols: 1.5,
  },
  {
    img: image2,
    title: 'Interracial',
    author: 'John doe',
    cols: 1.5,
  },
  {
    img: image3,
    title: 'Sweethearts',
    author: 'John doe',
    cols: 1,
  },
  {
    img: image1,
    title: 'Big ass',
    author: 'John doe',
    cols: 2,
  },
  {
    img: image3,
    title: 'Doggy style',
    author: 'John doe',
    cols: 2,
  },
  {
    img: image2,
    title: 'Oral',
    author: 'John doe',
    cols: 1,
  },
  {
    img: image1,
    title: 'Anal',
    author: 'John doe',
    cols: 1.5,
  },
  {
    img: image2,
    title: 'Black',
    author: 'John doe',
    cols: 1.5,
  },
  {
    img: image3,
    title: 'White',
    author: 'John doe',
    cols: 1,
  },
  {
    img: image1,
    title: 'Redhead',
    author: 'John doe',
    cols: 2,
  },
  {
    img: image3,
    title: 'SM',
    author: 'John doe',
    cols: 2,
  },
  {
    img: image2,
    title: 'NPR',
    author: 'John doe',
    cols: 1,
  },
]

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
});

function CategoryImageList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.title} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
              />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

CategoryImageList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryImageList);
