import React from 'react';
import emptyImage from "../../assets/empty.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const CarrouselImage = ({ pictureUrls }) => {
  return (
    <div>
    <div id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner">
        {pictureUrls.length > 0 ? (
          pictureUrls.map((image, index) => (
            <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
              <img className="d-block w-100" src={image} alt={`Slide ${index}`} style={{ width: '100%', height: '220px' }} />
            </div>
          ))
        ) : (
          <div className="carousel-item active">
            <img className="d-block w-100" src={emptyImage} alt="Empty Image" style={{ width: '100%', height: '220px' }} />
          </div>
        )}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  );
};

export default CarrouselImage;
