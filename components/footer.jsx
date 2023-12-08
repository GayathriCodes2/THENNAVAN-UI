// Footer.js
import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <>
    <footer className="bg-green-600 text-white p-6 mt-3">
      <div className="flex flex-col md:flex-row justify-around items-center">
        {/* Navigation Links */}
        <div className="mb-4 md:mb-0 flex flex-col items-center md:flex-row">
          <Link href="/sellwithus" className="hover:bg-green-500 transition-all rounded p-2 mb-2 md:mb-0">Sell with Us</Link>
          <Link href="/t&c" className="hover:bg-green-500 transition-all rounded p-2 mb-2 md:mb-0">Terms & Conditions</Link>
          <Link href="/reviews" className="hover:bg-green-500 transition-all rounded p-2 mb-2 md:mb-0">Reviews</Link>
          <Link href="/faqs" className="hover:bg-green-500 transition-all rounded p-2 mb-2 md:mb-0">FAQs</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer fill-current">
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
          </a>

          {/* YouTube Icon */}
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="h-6 w-6 cursor-pointer fill-current">
              <path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 20.15625 17.001953 C 20.526656 16.994297 20.909531 17.081906 21.269531 17.285156 L 29.873047 22.146484 C 31.324047 22.966484 31.324047 25.035469 29.873047 25.855469 L 21.269531 30.716797 C 19.830531 31.528797 18.037109 30.500328 18.037109 28.861328 L 18.037109 19.138672 C 18.037109 17.909422 19.045031 17.024922 20.15625 17.001953 z"></path>
            </svg>
          </a>

          <a href="https://wa.me/9677927081" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="h-6 w-6 cursor-pointer fill-current">
              <path d="M24,4C12.97,4,4,12.97,4,24c0,3.19,0.77,6.34,2.23,9.17l-2.14,7.66c-0.24,0.87,0.01,1.8,0.64,2.44 C5.21,43.74,5.85,44,6.5,44c0.23,0,0.45-0.03,0.67-0.09l7.66-2.14C17.66,43.23,20.82,44,24,44c11.03,0,20-8.97,20-20 C44,12.97,35.03,4,24,4z M34.36,31.37c-0.44,1.23-2.6,2.42-3.57,2.51c-0.97,0.09-1.88,0.44-6.34-1.32 c-5.38-2.12-8.78-7.63-9.04-7.99c-0.27-0.35-2.16-2.86-2.16-5.47c0-2.6,1.37-3.88,1.85-4.41c0.49-0.53,1.06-0.66,1.41-0.66 c0.36,0,0.71,0,1.02,0.01c0.37,0.02,0.79,0.04,1.19,0.92c0.47,1.04,1.5,3.66,1.63,3.93c0.13,0.26,0.22,0.57,0.04,0.92 c-0.17,0.35-0.26,0.57-0.53,0.88c-0.26,0.31-0.55,0.69-0.79,0.93c-0.26,0.26-0.54,0.55-0.23,1.08c0.31,0.53,1.37,2.26,2.94,3.66 c2.02,1.8,3.72,2.36,4.25,2.63c0.53,0.26,0.84,0.22,1.15-0.14c0.31-0.35,1.32-1.54,1.68-2.07c0.35-0.53,0.7-0.44,1.19-0.26 c0.48,0.17,3.08,1.45,3.61,1.72c0.53,0.26,0.88,0.39,1.01,0.61C34.8,29.07,34.8,30.13,34.36,31.37z"></path>
            </svg>
          </a>
        </div>
      </div>
      
    </footer>
    <div className='flex flex-col md:flex-row justify-around items-center'>
    copyright @ 2023
      </div>
    </>
  );
};

export default Footer;
