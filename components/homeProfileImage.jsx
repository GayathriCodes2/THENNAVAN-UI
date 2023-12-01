import React from 'react';
import Link from 'next/link';

const HomeProfileImage = ({ text, path, ButtonContent }) => {
  return (
    <div className="flex items-center justify-center p-10 text-black font-bold text-lg rounded-md shadow-md">
      <span className="flex-1">{text}</span>
      <Link href={path}>
        <button className="bg-transparent text-black border-2 border-black rounded-full px-4 py-2 hover:text-black">
          {ButtonContent}
        </button>
      </Link>
    </div>
  );
};

export default HomeProfileImage;
