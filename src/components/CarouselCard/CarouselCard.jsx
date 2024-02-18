import { useState } from "react";

const CarouselCard = (props) => 
{ 
  const pictureUrls = props.pictureUrls;
  const [currentImage, setCurrentImageIdx] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentImage - 1 + pictureUrls.length) % pictureUrls.length;
    setCurrentImageIdx(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentImage + 1) % pictureUrls.length;
    setCurrentImageIdx(newIndex);
  };

  const image = pictureUrls[currentImage];

  return (
    <div style={{ position: 'relative', width: '100%', height: '220px' }}>
      <button onClick={prevSlide}
              disabled={pictureUrls.length <= 1} 
              style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)' }}
      >
        &#9664;
      </button>
      <img src={image} style={{ width: '100%', height: '220px' }} />
      <button onClick={nextSlide} 
              disabled={pictureUrls.length <= 1}
              style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)' }}
              >
        &#9654;

      </button>
    </div>
  );
};

 export default CarouselCard;