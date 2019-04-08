import React, { Component } from 'react';
import Slider from 'nuka-carousel';
import image1 from '../assets/sample_images/image1.png';
import image2 from '../assets/sample_images/image2.jpg';
import image3 from '../assets/sample_images/image3.jpg';


class Carousel extends Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    const sliderSettings = {
      cellAlign: 'center',
      wrapAround: true,
      autoplay: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      swipeToSlide: true,
      focusOnSelect: false,
      pauseOnHover: true,
      enableKeyboardControls: true,
      dragging: true,
      heightMode: 'first'
    };

    return (
      <Slider {...sliderSettings}>
        <img alt="" src={image1} />
        <img alt="" src={image2} />
        <img alt="" src={image3} />
      </Slider>

    );
  }
}

export default Carousel;
