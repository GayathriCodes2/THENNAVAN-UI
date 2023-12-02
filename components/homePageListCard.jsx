import Image from 'next/image';
import Link from 'next/link';
const HomepageCard = ({ data }) => {
  return (
    <div className="shadow-lg border rounded-md overflow-hidden lg:p-4 lg:m-6 m-2 p-2 bg-slate-100">
      <Link href={data.productUrl}>
      <div className="relative h-48 w-full">
        <Image
          src={data.imageUrl}
          alt={data.heading}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className='rounded'
        />
      </div>
      <div className="lg:p-2 lg:flex-grow">
        
        <div className="flex items-center justify-between my-auto">
          <h3 className="lg:text-xl text-sm font-semibold mb-2 mt-2">{data.heading}</h3>
          <p className="lg:text-lg font-bold text-xs text-green-500">${data.price}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default HomepageCard;
