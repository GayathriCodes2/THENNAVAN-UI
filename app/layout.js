import Whatsapp from '@components/whatsapp';
import Footer from '@components/footer';
import Header from '@components/header';
import '@styles/global.css';

export const metadata = {
  title: 'Thennavan store',
}


const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
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
