import React from 'react';
import Link from 'next/link';

const HomeProfileImage = ({ text, path, ButtonContent, imageUrl, altText }) => {
  return (
    <div className="flex items-center justify-around py-10 text-black font-bold text-lg rounded-md">
      {/* Add Image Tag */}
      <div className="lg:text-2xl flex mx-auto lg:text-center">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={altText}
          className="mr-4 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 object-cover shadow-2xl outline rounded-full"
        />
      )}


<h3 className="lg:text-xl text-sm font-semibold mb-2 lg:mt-9 mt-4 uppercase">{text}</h3>


</div>
      {/* Button and Link */}
      <Link href={path} className='self-end'>
      <button class="w-full md:w-auto px-4 py-2 bg-white text-Black border-black rounded-full focus:outline-none border hover:bg-black hover:text-white text-sm">
            {ButtonContent}
        </button>
      </Link>
    </div>
  );
};

export default HomeProfileImage;
