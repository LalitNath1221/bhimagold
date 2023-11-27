import React, { render } from "react";

const Carousal = () => {
  const [current, setCurrent] = React.useState(0);
  const images = ["https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F4e966290-d464-11ed-a560-65eb94f96dbd.jpg&w=1200&q=75","https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F4e966291-d464-11ed-a560-65eb94f96dbd.jpg&w=1200&q=75","https://www.bhimagold.com/_next/image?url=https%3A%2F%2Fd1bpnn2a5id540.cloudfront.net%2F1653277918007%2F4e966295-d464-11ed-a560-65eb94f96dbd.jpg&w=1200&q=75"];
  const imageSlides = document.getElementsByClassName("slide-image");
  const bubbles = document.getElementsByClassName("bubble-outer");
  const nextImage = () => {
    let newIndex = (current === images.length - 1 ? 0 : current + 1);
    imageSlides[current].className = "slide-image leftOut";
    imageSlides[newIndex].className= "slide-image leftIn";
    updateBubbles(newIndex);
    setCurrent(newIndex);
  }
  const prevImage = () => {
    let newIndex = (current === 0 ? images.length - 1 : current - 1);
    imageSlides[current].className = "slide-image rightOut";
    imageSlides[newIndex].className= "slide-image rightIn";
    updateBubbles(newIndex);
    setCurrent(newIndex);
  }
  const jumpImage = (e) => {
    let jumpIndex = parseInt(e.target.id);
    if(jumpIndex === current) return;
    if(jumpIndex - current >= 0) {
      imageSlides[current].className = "slide-image leftOut";
      imageSlides[jumpIndex].className = "slide-image leftIn";
    } else {
      imageSlides[current].className = "slide-image rightOut";
      imageSlides[jumpIndex].className = "slide-image rightIn";
    }
    updateBubbles(jumpIndex);
    setCurrent(jumpIndex);
  }
  const updateBubbles = (highlight) => {
    bubbles[current].style.backgroundColor = "white";
    bubbles[highlight].style.backgroundColor = "black";
  }
  React.useEffect(() => {
    bubbles[current].style.backgroundColor="black";
  }, []);
  return (
    <div className="gallery-container">
      <span className="material-symbols-outlined button-prev" onClick={prevImage}>arrow_left_alt</span>
      <span className="material-symbols-outlined button-next" onClick={nextImage}>arrow_right_alt</span>
      <div className="gallery-track">
        {
          images.map((image, index) => {
            return <div className="slide-image" style={ (index === 0) ? { backgroundImage: `url(${image})`, transform:"translateX(0%)" } : { backgroundImage: `url(${image})`, transform:"translateX(100%)" }}></div>
          })
        }
      </div>
      <div className="gallery-footer">
        {
          images.map((image, index) => {
            return <div className="bubble-outer" onClick={jumpImage} id={index}>
              <div className="bubble-inner" id={index}>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default Carousal