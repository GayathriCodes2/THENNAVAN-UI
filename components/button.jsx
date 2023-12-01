// components/SeeMoreButton.js
import Link from 'next/link';
import React from 'react';

const SeeMoreButton = ({ to }) => {
  return (
    <Link href={to}>
      <div className="border-black border bg-black text-white w-28 hover:bg-white hover:text-black transition-all font-bold py-2 px-4 rounded">
        See More
      </div>
    </Link>
  );
};

export default SeeMoreButton;
