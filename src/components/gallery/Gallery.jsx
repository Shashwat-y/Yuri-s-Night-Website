import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Gallery.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Gallery() {
    const slides = [];
    for (let index = 1; index <= 18; index++) {
        slides.push(
            <div key={index}>
                <img src={`../../../Gallery/Image${index}.jpg`} alt={`Slide ${index}`}
                  />
            </div>
        );
    }
    return (
        
      <div className='imageContainer'>
         <div class="text">
        <h1>GALLERY</h1>
        </div>
        <Carousel showArrows={true} autoPlay={true} interval={2000}>
            {slides}
        </Carousel>
        </div>
    );
}

export default Gallery;
