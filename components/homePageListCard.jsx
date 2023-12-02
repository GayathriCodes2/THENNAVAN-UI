import Image from 'next/image';

const HomepageCard = ({ data }) => {
  return (
    <div className="shadow-lg border rounded-md overflow-hidden p-4 m-6 bg-slate-100">

      <div className="relative h-48 lg:w-full">
        <Image
          src={data.imageUrl}
          alt={data.heading}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className='rounded'
        />
      </div>
      <div className="p-2 lg:flex-grow">
        
        <div className="flex items-center justify-between my-auto">
          <h3 className="text-xl font-semibold mb-2 mt-2">{data.heading}</h3>
          <p className="text-lg font-bold text-green-500">${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default HomepageCard;
