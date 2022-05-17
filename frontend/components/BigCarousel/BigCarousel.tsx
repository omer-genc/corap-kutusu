import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import Image from 'next/image';

const BigCarousel = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="w-screen h-96 md:h-128 lg:h-144">
          <Image
            src="https://picsum.photos/id/124/800/320"
            alt="slide 1"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-96 md:h-128 lg:h-144">
          <Image
            src="https://picsum.photos/id/130/800/320"
            alt="slide 1"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-96 md:h-128 lg:h-144">
          <Image
            src="https://picsum.photos/id/54/800/320"
            alt="slide 1"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BigCarousel;
