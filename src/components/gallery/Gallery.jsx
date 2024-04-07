import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Gallery.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Gallery() {
    const slides = [];
    for (let index = 1; index <= 180; index++) {
        slides.push(
            <div key={index}>
                <img src={`../../../Gallery/Image${parseInt(index%18)+1}.jpg`} alt={`Slide ${parseInt(index%18)+1}`}
                  />
            </div>
        );
    }
    return (
        
      <div className='imageContainer'>
         <div class="text">
        <h1>GALLERY</h1>
        </div>
        <Carousel showArrows={true} autoPlay={true} interval={2000} showIndicators={false}>
            {slides}
        </Carousel>
        </div>
    );
}

export default Gallery;
