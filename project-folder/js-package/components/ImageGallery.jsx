import React, { useState, useEffect } from 'react';
const gallery = Object.values(
  import.meta.glob('../assets/photos/*', { eager: true, as: 'url' }),
);

const photos = gallery.map((image) => ({
  src: image,
}));

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
    window.addEventListener('keydown', handleKeyPress);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            className="w-full h-auto object-cover cursor-pointer"
            onClick={() => openLightbox(photo.src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={closeLightbox}
        >
          <img src={selectedImage} className="max-w-full max-h-full z-50" />
        </div>
      )}
    </>
  );
}

export default ImageGallery;
