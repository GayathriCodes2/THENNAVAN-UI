import Footer from '@components/footer';
import Header from '@components/header';
import Whatsapp from '@components/whatsapp';
import '@styles/global.css';

export const metadata = {
  title: 'Our products',
  description: 'Generated by create next app',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          <div className="px-14 mt-28">{children}</div>
          <Whatsapp />
          <Footer />

        </main>
      </body>
    </html>
  );
};

export default Layout;