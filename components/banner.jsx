import React from 'react';
import Image from 'next/image';

const yourWidth = 1200; 
const yourHeight = 800; 

function Carousel() {
  return (
    <div className="relative max-w-screen-md mx-auto">
      <div className="carousel">
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden />
        <div className="carousel-item absolute opacity-0" style={{ height: '50%', width: '100%' }}>
          <Image src="/1.jpg" alt="Image 1" width={yourWidth} height={yourHeight} className="w-full h-full object-cover" />
        </div>
        <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-8 absolute cursor-pointer hidden text-2xl font-bold text-white hover:text-gray-900 leading-tight text-center bg-black bg-opacity-50 rounded-full opacity-50">‹</label>
        <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-8 absolute cursor-pointer hidden text-2xl font-bold text-white hover:text-gray-900 leading-tight text-center bg-black bg-opacity-50 rounded-full opacity-50">›</label>

        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
        <div className="carousel-item absolute opacity-0" style={{ height: '50%', width: '100%' }}>
          <Image src="/2.jpg" alt="Image 2" width={yourWidth} height={yourHeight} className="w-full h-full object-cover" />
        </div>
        <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-8 absolute cursor-pointer hidden text-2xl font-bold text-white hover:text-gray-900 leading-tight text-center bg-black bg-opacity-50 rounded-full opacity-50">‹</label>
        <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-8 absolute cursor-pointer hidden text-2xl font-bold text-white hover:text-gray-900 leading-tight text-center bg-black bg-opacity-50 rounded-full opacity-50">›</label>

        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
        <div className="carousel-item absolute opacity-0" style={{ height: '50%', width: '100%' }}>
          <Image src="/3.jpg" alt="Image 3" width={yourWidth} height={yourHeight} className="w-full h-full object-cover" />
        </div>
        <label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-8 absolute cursor-pointer hidden text-2xl font-bold text-white hover:text-gray-900 leading-tight text-center bg-black bg-opacity-50 rounded-full opacity-50">‹</label>
        <label htmlFor="carousel-4" className="next control-3 w-10 h-10 mr-2 md:mr-8 absolute cursor-pointer hidden text-2xl font-bold text-white hover:text-gray-900 leading-tight text-center bg-black bg-opacity-50 rounded-full opacity-50">›</label>

        <input className="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden />
        <div className="carousel-item absolute opacity-0" style={{ height: '50%', width: '100%' }}>
          <Image src="/4.jpg" alt="Image 4" width={yourWidth} height={yourHeight} className="w-full h-full object-cover" />
        </div>
        <label htmlFor="carousel-3" className="prev control-4 w-10 h-10 ml-2 md:ml-8 absolute cursor-pointer hidden text-2xl font-bold text-white hover:text-gray-900 leading-tight text-center bg-black bg-opacity-50 rounded-full opacity-50">‹</label>
        <label htmlFor="carousel-1" className="next control-4 w-10 h-10 mr-2 md:mr-8 absolute cursor-pointer hidden text-2xl font-bold text-white hover:text-gray-900 leading-tight text-center bg-black bg-opacity-50 rounded-full opacity-50">›</label>

        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-900">•</label>
          </li>
          <li className="inline-block mr-3">
            <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-900">•</label>
          </li>
          <li className="inline-block mr-3">
            <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-900">•</label>
          </li>
          <li className="inline-block mr-3">
            <label htmlFor="carousel-4" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-gray-900">•</label>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Carousel;
