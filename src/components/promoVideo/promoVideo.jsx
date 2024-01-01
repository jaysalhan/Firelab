import React from 'react';
import './promoVideo.css';
import videoCover from '../../assets/bgs/video-cover.png';
import videoBg from '../../assets/bgs/about-content-bg.png';
import { FIRELAB_VIDEO_URL } from '../../constants/generals';
import SectionLayout from '../layouts/sectionLayout';


function PromoVideo() {
  const styles = {
    'promo_video_wrapper' : {
      backgroundImage: `url(${videoBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '80% 95%',
    }
  }
  return (
    <SectionLayout
      style={styles.promo_video_wrapper}>
        <video poster={videoCover} width={"70%"} className='video_component' controls >
          <source src={FIRELAB_VIDEO_URL} type="video/mp4" />
          Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
    </SectionLayout>
  )
}

export default PromoVideo;