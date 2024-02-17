import React from 'react';

const CardSkeleton = (props) => {
  const { mode } = props
  return (
    <>
      <div className={`my-3 max-w-sm bg-${mode === 'light'
        ? 'white' : 'gray-800'} border ${mode === 'light'
          ? 'border-gray-200' : 'border-gray-700'} rounded-lg shadow`}>
        <div className="animate-pulse">
          <img src={`${process.env.PUBLIC_URL}/download.png`}
            alt="" className='rounded-t-lg bg-gray-300 h-56 w-full object-cover' />
          <div className="p-5">
            <div className="mb-2 rounded bg-gray-300 h-6 w-11/12"></div>
            <div className="mb-3 rounded bg-gray-300 h-4 w-11/12"></div>
            <div className="mb-3 rounded bg-gray-300 h-3 w-11/12"></div>
            <div className={`inline-flex items-center px-3 py-2 text-sm font-medium
                  text-white rounded-lg focus:ring-4 focus:outline-none
                   ${mode === 'light'
                ? 'bg-blue-400 hover:bg-blue-600 focus:ring-blue-300'
                : 'bg-blue-600 hover:bg-blue-400 focus:ring-blue-600'}`}>
              <div className="bg-gray-300 rounded h-4 w-16"></div>
              <div className="w-6 h-3.5 rounded-sm ms-2 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSkeleton;
