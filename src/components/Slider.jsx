import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import tuborg_slide1 from '../images/tuborg_slide1.jpg';
import tuborg_slide2 from '../images/tuborg_slide2.jpg';
import tuborg_slide3 from '../images/tuborg_slide3.jpg';

import lenscart_slide1 from '../images/lenscart_slide1.webp'
import lenscart_slide2 from '../images/lenscart_slide2.gif'
import lenscart_slide3 from '../images/lenscart_slide3.webp'
import lenscart_slide4 from '../images/lenscart_slide4.webp'
import lenscart_slide5 from '../images/lenscart_slide5.gif'

import slide1 from '../images/thar_images/slide1.webp';
import slide2 from '../images/thar_images/slide2.webp';
import slide3 from '../images/thar_images/slide3.webp';

const Slider = () => {
  return (
    <div className='sm:w-3/5 lg:w-3/5 mx-auto'>
      <Carousel showThumbs={false} autoPlay showArrows={true} infiniteLoop>
        <div>
          <img src={slide1} className="h-[200px]" alt="img_2" />
        </div>

        <div>
          <img src={slide2} className="h-[200px]" alt="img_2" />
        </div>

        <div>
          <img src={slide3} className="h-[200px]" alt="img_1" />
        </div>

        {/* <div>
          <img src={lenscart_slide4} className="h-[200px]" alt="img_1" />
        </div>

        <div>
          <img src={lenscart_slide5} className="h-[200px]" alt="img_1" />
        </div> */}

      </Carousel>
    </div>
  )
}

export default Slider;
