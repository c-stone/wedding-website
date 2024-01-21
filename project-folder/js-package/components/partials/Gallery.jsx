import '../../styles/fonts.css';
import '../../styles/tailwind.css';
import Footer from '../Footer';
import Header from '../Header';
// import ImageGallery from '../ImageGallery';
import PhotoAlbum from 'react-photo-album';
import photos from '../../data/photos';

function Gallery() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col items-center py-10">
        <PhotoAlbum photos={photos} layout="masonry" />
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
