import React from 'react';
import Link from 'next/link';

const HomeProfileImage = ({ text, path, ButtonContent }) => {
  return (
    <div className="flex items-center justify-center p-10 text-black font-bold text-lg rounded-md">
      <span className="flex-1 lg:text-2xl">{text}</span>
      <Link href={path}>
        <button className="bg-transparent text-black border-2 border-black rounded-full px-4 hover:bg-black hover:text-white transition-all duration-700 ">
          {ButtonContent}
        </button>
      </Link>
    </div>
  );
};

export default HomeProfileImage;
