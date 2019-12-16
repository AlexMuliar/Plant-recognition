import React from 'react';
import Slider from 'react-slick';

import 'components/common/SlickSlider/slick.css';
import 'components/common/SlickSlider/slick-theme.css';

import PropTypes from 'prop-types';

import styles from './SlickSlider.module.css';

function SlickSlider(props) {
  const { data, settings} = props;
  // const photosArr = data.map(p => (
  //   <div className={styles.sliderBlock}>
  //       {/* <div className={styles.galleryImgDiv}> */}
  //         {/* <img src={p} className={styles.galleryPhoto} alt='plantator' /> */}
  //       {/* </div> */}
  //       <p>Test</p>
      
  //     </div>
  // ));
    const photosArr = data.map(p => ( 
      <div className={styles.plantatorImage}>
        <img src={p} alt="Plant" />
    </div> ));

  return <Slider {...settings}>{photosArr}</Slider>;
}

export default SlickSlider;

SlickSlider.propTypes = {
  data: PropTypes.array,
  settings: PropTypes.object,
};
