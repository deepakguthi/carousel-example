import Image from 'next/image';
import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        {/* Indicator buttons */}
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        {/* Carousel items */}
        <div className="carousel-item active">
          <Image src="/a.jpg" width={'1000'} height={100} className="d-block w-100" alt="a"/>
        </div>
        <div className="carousel-item">
          <Image src="/b.jpg" width={'1000'} height={100} className="d-block w-100" alt="b"/>
        </div>
        <div className="carousel-item">
          <Image src="/c.jpg" width={'1000'} height={100} className="d-block w-100" alt="c"/>
        </div>
      </div>
      {/* Previous and Next buttons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
