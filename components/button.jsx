// components/SeeMoreButton.js
import React from 'react';
import Link from 'next/link';

const SeeMoreButton = ({ to }) => {
  return (
    <Link href={to}>
      <div className="bg-blue-500 w-28 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        See More
      </div>
    </Link>
  );
};

export default SeeMoreButton;
