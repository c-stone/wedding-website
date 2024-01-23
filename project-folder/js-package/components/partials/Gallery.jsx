import { Island } from '@hubspot/cms-components';
import '../../styles/fonts.css';
import '../../styles/tailwind.css';
import Footer from '../Footer';
import Header from '../Header';
import ImageGallery from '../ImageGallery?island';

function Gallery() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col items-center py-10">
        <Island module={ImageGallery} />
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
