import Head from 'next/head';
import { Inter } from 'next/font/google';
import Whatsapp from '@components/whatsapp';
import Footer from '@components/footer';
import Header from '@components/header';
import '@styles/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Thennavan stores',
  description: '"Support Farmers Today".Thennavan is an e-commerce platform connecting you directly with the farmers and women artisans of South Tamil Nadu. We offer a vibrant selection of organic produce, grown with care and respect for the land, and handcrafted delicacies made with love by our talented ladies.',
  keywords: 'Thennavan, stores, e-commerce, South Tamil Nadu, organic produce, handcrafted delicacies, farmers, women artisans, sustainable farming, farmer empowerment, local produce, artisanal products, natural remedies, traditional flavors, agroecology, community-supported agriculture, women entrepreneurship, organic farming, cultural heritage, fair trade, agribusiness, eco-friendly products, health-conscious choices, South Indian delicacies, farm-to-table, ethical consumption, rural development, organic honey, handcrafts, banana fiber',

};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
        {/* Add other meta tags as needed */}
      </Head>
      <body className={inter.className}>
        <main>
          <Header />
          <div className="px-2 lg:px-14">{children}</div>
          <Whatsapp />
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default Layout;
