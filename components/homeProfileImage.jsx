import React from 'react';
import Link from 'next/link';

const HomeProfileImage = ({ text, path, ButtonContent, imageUrl, altText }) => {
  return (
    <div className="flex items-center justify-center p-10 text-black font-bold text-lg rounded-md">
      {/* Add Image Tag */}
      <div className="lg:text-2xl flex mx-auto lg:text-center">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={altText}
          className="mr-4 w-9 h-9 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover rounded-full"
        />
      )}

<span className="lg:items-center my-auto text-xs sm:text-3xl font-bold">
  {text}
</span>

</div>
      {/* Button and Link */}
      <Link href={path}>
        <button className="bg-transparent text-black border-2 border-black rounded-full px-4 hover:bg-black hover:text-white transition-all duration-700">
          {ButtonContent}
        </button>
      </Link>
    </div>
  );
};

export default HomeProfileImage;
