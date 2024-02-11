import React, { useState, useEffect } from 'react';
import { data } from './constant';

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [leftButtonClicked, setLeftButtonClicked] = useState(false);
  const [rightButtonClicked, setRightButtonClicked] = useState(false);

  const handlePreviousClick = () => {
    setActiveImageIndex(activeImageIndex === 0 ? data.length - 1 : activeImageIndex - 1);
    setLeftButtonClicked(true);
    setTimeout(() => setLeftButtonClicked(false), 300);
  };

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
    setRightButtonClicked(true);
    setTimeout(() => setRightButtonClicked(false), 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="flex justify-center relative  mt-16 " >
      <button
        className={`absolute top-1/2 -left-6 transform -translate-y-3/4 text-7xl bg-transparent text-gray-800 p-4 m-10 ${leftButtonClicked ? 'scale-125' : ''} text-blue-950`}
        onClick={handlePreviousClick}
      >
        &#8249;
      </button>

      <a href={data[activeImageIndex].link} target="_blank" className="w-full h-[250px] object-cover cursor-pointer">
        <img src={data[activeImageIndex].url} alt="Advertisement"  />
      </a>

      <button
        className={`absolute top-1/2 -right-6 transform -translate-y-3/4 text-7xl bg-transparent text-gray-800 p-4 m-10 ${rightButtonClicked ? 'scale-125' : ''} text-blue-950`}
        onClick={handleNextClick}
      >
        &#8250;
      </button>
    </div>
  );
};

export default ImageSlider;

