import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = (props) => {
  // Destructuring props
  let { title, description, imageUrl, newsUrl, author, date, source, mode } = props;

  return (
    <div className='my-3 relative'>
      <div className={`max-w-sm mx-auto ${mode === 'light'
        ? 'bg-white border-gray-200'
        : 'bg-gray-800 border-gray-700'} border rounded-lg shadow`}>
        {/* Image */}
        <Link to="#">
          <img className="rounded-t-lg w-full h-[250px] object-cover" src={imageUrl} alt="" />
        </Link>
        {/* Source */}
        <div className="absolute flex top-0">
          <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ${mode === 'light'
            ? 'bg-green-100 text-green-800'
            : 'bg-green-900 text-green-300'}`}>
            {source}
          </span>
        </div>
        <div className="p-5">
          {/* Title */}
          <Link to="#">
            <p className={`mb-2 text-lg font-bold tracking-tight ${mode === 'light'
              ? 'text-gray-900'
              : 'text-white'}`}>
              {title}...
            </p>
          </Link>
          {/* Description */}
          <p className={`mb-3 font-normal ${mode === 'light'
            ? 'text-gray-800'
            : 'text-gray-400'}`}>
            {description}...</p>
          {/* Author and Date */}
          <p className={`mb-3 font-normal text-sm ${mode === 'light'
            ? 'text-gray-600'
            : 'text-gray-500'}`}>
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
          </p>
          {/* Read more link */}
          <Link to={newsUrl}
            target="_blank"
            className={`inline-flex items-center px-3 py-2 text-sm font-medium ${mode === 'light'
              ? 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'} 
              text-center text-white rounded-lg focus:ring-4 focus:outline-none`}>
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;