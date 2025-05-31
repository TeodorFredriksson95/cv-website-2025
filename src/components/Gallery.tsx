import { useState } from 'react';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
import { IoMdClose } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css';

const images = [
  'naptha.jpg',
  'wolves.jpeg',
  'mailman.jpg',
  'globalmap_scaled.jpg',
  'rune_golem.jpg',
  'eviltrees_1.jpg',
  'steampunk_grassland.jpg',
  'vedverket.jpg',
  'forest_fox_image.jpg',
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-9999"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={handleClose}
            >
              <Swiper
                onInit={(swiper) => {
                     if (!!swiper.navigation) {
                        swiper.navigation.destroy();
                        }
                }}
                pagination={{ clickable: true } }
                modules={[Pagination]}
                loop={true}
                loopAdditionalSlides={1}
                initialSlide={selectedIndex}
                spaceBetween={50}
                slidesPerView={1.1}
                centeredSlides
                className="w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx} className="flex items-center justify-center">
                    <img
                      src={`/concepts/${img}`}
                      alt={`Concept ${idx + 1}`}
                      className="object-contain max-h-full max-w-full mx-auto"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <IoMdClose
                size={36}
                className="absolute top-6 right-6 z-99999 bg-background/90 hover:bg-background/70 p-2 rounded-full text-white cursor-pointer transition"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 group">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md transition duration-300 ease-in-out group-hover:scale-95 hover:scale-105 hover:z-10 cursor-pointer"
            onClick={() => handleImageClick(idx)}
          >
            <img
              src={`/concepts/${img}`}
              alt={`Concept ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
