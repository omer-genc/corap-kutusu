import React, { useEffect } from 'react';
import Product from '../Product';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const FeaturedProducts = () => {
  const [slidesPerView, setSlidesPerView] = React.useState(1);

  useEffect(() => {
    const calculateSlidesPerView = () => {
      if (innerWidth < 768) return 1;
      if (innerWidth < 976) return 2;
      if (innerWidth < 1440) return 3;

      return 4;
    };

    return () => {
      setSlidesPerView(calculateSlidesPerView());
    };
  }, []);

  return (
    <div className="container mx-auto mt-32">
      <h2 className="text-4xl text-center font-bold text-navy-blue">
        Featured Products
      </h2>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mt-12 h-[27rem]"
      >
        <SwiperSlide>
          <Product
            variant="featured"
            product={{
              name: 'Product a 1',
              price: 100,
              image: 'https://picsum.photos/id/104/320/320',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            variant="featured"
            product={{
              name: 'Product a 1',
              price: 100,
              image: 'https://picsum.photos/id/114/320/320',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <Product
            variant="featured"
            product={{
              name: 'Product a 1',
              price: 100,
              image: 'https://picsum.photos/id/124/320/320',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            variant="featured"
            product={{
              name: 'Product a 1',
              price: 100,
              image: 'https://picsum.photos/id/134/320/320',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            variant="featured"
            product={{
              name: 'Product a 1',
              price: 100,
              image: 'https://picsum.photos/id/144/320/320',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            variant="featured"
            product={{
              name: 'Product a 1',
              price: 100,
              image: 'https://picsum.photos/id/154/320/320',
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
