import React from 'react'
import img1 from '../assets/media/image1.png';
import img2 from '../assets/media/image2.png';
import img3 from '../assets/media/image3.png';

const images = [img1, img2, img3];
const delay = 2500;

function Carousal2() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((backgroundColor, index) => (
            /**<div
              className="slide"
              key={index}
              style={{ backgroundColor }}
            ></div>**/
            <img className='slide' src={backgroundColor} key={index} alt="" />
          ))}
        </div>
  
        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
}

export default Carousal2