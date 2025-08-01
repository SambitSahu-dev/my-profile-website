import React, { useRef, useState } from "react";

// Dynamically import all images from the gallery folder
const imageModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png}', { eager: true });
const galleryImages = Object.values(imageModules).map((mod: any) => mod.default);

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
  };

  const showPrev = () => {
    if (fullscreenIndex !== null) {
      setFullscreenIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const showNext = () => {
    if (fullscreenIndex !== null) {
      setFullscreenIndex((prev) => (prev! + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-50 text-black">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">Gallery</h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth gap-4 px-4"
      >
        {galleryImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="h-96 object-contain rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => openFullscreen(index)}
            loading="lazy"
          />
        ))}
      </div>

      {fullscreenIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50">
          <div className="relative w-full h-full flex justify-center items-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeFullscreen}
            >
              ✕
            </button>

            <button
              className="absolute left-4 text-white text-4xl font-bold"
              onClick={showPrev}
            >
              ‹
            </button>

            <img
              src={galleryImages[fullscreenIndex]}
              alt={`Fullscreen ${fullscreenIndex + 1}`}
              className="max-h-[80vh] max-w-[90vw] object-contain"
            />

            <button
              className="absolute right-4 text-white text-4xl font-bold"
              onClick={showNext}
            >
              ›
            </button>
          </div>

          <p className="text-white mt-4">
            {fullscreenIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
