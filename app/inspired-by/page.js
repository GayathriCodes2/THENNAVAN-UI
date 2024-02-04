// pages/agriculture-experts.js
import Link from 'next/link';

const ExpertCard = ({ name, description, learnMoreLink, imageSrc, altText, index }) => (
  <div className={`bg-white p-4 md:p-8 mb-8 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
    <img
      src={imageSrc}
      alt={altText}
      className={`w-full mb-4 md:mb-6 h-auto md:w-1/2 ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}
    />
    <div className="md:w-1/2">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{name}</h2>
      <p className="text-sm md:text-lg mb-4">{description}</p>
      <Link href={learnMoreLink}>
        <span className="text-blue-500">Learn More</span>
      </Link>
    </div>
  </div>
);

const AgricultureExpertsPage = () => {
  const expertsData = [
    {
      name: "Nammalvar",
      description: "Nammalvar was a renowned organic farming expert and environmental activist. His pioneering work in promoting sustainable and organic farming practices has left a lasting impact on agriculture in Tamil Nadu.",
      learnMoreLink: "/nammalvar",
      imageSrc: "/images/nammalvar-image.jpg",  // Replace with the actual image path
      altText: "Nammalvar"
    },
    {
      name: "Periyar E. V. Ramasamy",
      description: "While primarily known as a social reformer, Periyar was a strong advocate for self-sufficiency and sustainable living. His emphasis on empowering rural communities can inspire farmers.",
      learnMoreLink: "/periyar",
      imageSrc: "/images/periyar-image.jpg",  // Replace with the actual image path
      altText: "Periyar E. V. Ramasamy"
    },{
        name:"M. S. Swaminathan",
        description:"A renowned agricultural scientist, M. S. Swaminathan is known for his role in the Green Revolution in India. His research and advocacy for sustainable agriculture practices make him a prominent figure.",
        learnMoreLink:"/m-s-swaminathan",
        imageSrc:"/images/m-s-swaminathan-image.jpg",  // Replace with the actual image path
        altText:"M. S. Swaminathan",
     },{
        name:"P. Ayyakannu",
        description:"P. Ayyakannu is a farmer leader and the president of the South Indian Rivers Inter-Linking Farmers' Association. He has been actively involved in advocating for farmers' rights and welfare.",
        learnMoreLink:"/p-ayyakannu",
        imageSrc:"/images/p-ayyakannu-image.jpg",  // Replace with the actual image path
        altText:"P. Ayyakannu",
      },{
        name:"S. Muthiah",
        description:"S. Muthiah is a successful farmer and entrepreneur who has embraced modern agricultural techniques. His efforts in promoting agribusiness and sustainable farming practices are noteworthy.",
        learnMoreLink:"/s-muthiah",
        imageSrc:"/images/s-muthiah-image.jpg",  // Replace with the actual image path
        altText:"S. Muthiah",
      },{
        name:"G. Nammalvar",
        description:"G. Nammalvar was an organic farming expert and popular agricultural scientist. His work in promoting natural farming methods has been influential in Tamil Nadu.",
        learnMoreLink:"/g-nammalvar",
        imageSrc:"/images/g-nammalvar-image.jpg",  // Replace with the actual image path
        altText:"G. Nammalvar",
      }
    // Add data for other experts here
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Prominent Figures in Agriculture</h1>

      {expertsData.map((expert, index) => (
        <ExpertCard key={index} index={index} {...expert} />
      ))}
    </div>
  );
};

export default AgricultureExpertsPage;
