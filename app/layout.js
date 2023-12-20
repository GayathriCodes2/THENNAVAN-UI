import { Inter } from 'next/font/google'
import Whatsapp from '@components/whatsapp';
import Footer from '@components/footer';
import Header from '@components/header';
import '@styles/global.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thennavan stores',
  description: 'Thennavan Stores is an e-commerce platform connecting you directly with the farmers and women artisans of South Tamil Nadu. We offer a vibrant selection of organic produce, grown with care and respect for the land, and handcrafted delicacies made with love by our talented ladies.',
  keyword: ''
}


const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          <div className="px-2 lg:px-14 ">{children}</div>
          <Whatsapp />
          <Footer />

        </main>
      </body>
    </html>
  );
};

export default Layout;
