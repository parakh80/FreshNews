import React, { useState, useEffect } from 'react';
import { data } from './constant';

const ImageSlider = () => {

  // State variables to track active image index and button click states
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [leftButtonClicked, setLeftButtonClicked] = useState(false);
  const [rightButtonClicked, setRightButtonClicked] = useState(false);

  // Function to handle click event for previous button
  const handlePreviousClick = () => {
    setActiveImageIndex(activeImageIndex === 0 ? data.length - 1 : activeImageIndex - 1);
    setLeftButtonClicked(true);
    setTimeout(() => setLeftButtonClicked(false), 300);
  };

  // Function to handle click event for next button
  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
    setRightButtonClicked(true);
    setTimeout(() => setRightButtonClicked(false), 300);
  };

  // Effect hook to automatically advance to the next slide after a certain interval
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);


  return (

    <div className="flex justify-center relative mt-24" >
      {/* Previous button */}
      <button
        className={`absolute top-1/2 -left-6 transform -translate-y-3/4 sm:text-5xl md:text-7xl    bg-transparent text-gray-800 p-4 m-10 ${leftButtonClicked ? 'scale-125' : ''} text-blue-950`}
        onClick={handlePreviousClick}
      >
        &#8249;
      </button>
      {/* image */}
      <a href={data[activeImageIndex].link} target="_blank" rel="noreferrer" className="w-full sm:h-[150px] md:h-[250px]  object-cover cursor-pointer">
        <img src={data[activeImageIndex].url} alt={`Advertisement ${activeImageIndex + 1}`}  />
      </a>
      {/* Next Button */}
      <button
        className={`absolute md:text-7xl sm:text-5xl  top-1/2 -right-6 transform -translate-y-3/4 bg-transparent text-gray-800 p-4 m-10 ${rightButtonClicked ? 'scale-125' : ''} text-blue-950`}
        onClick={handleNextClick}
      >
        &#8250;
      </button>
    </div>



  );
};

export default ImageSlider;
