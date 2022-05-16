import React from 'react';
import Product from '../Product';

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto mt-28">
      <h2 className="text-4xl text-center font-bold text-navy-blue">
        FeaturedProducts
      </h2>
      <div className="flex justify-around gap-4 flex-wrap mt-16">
        <Product
          variant="featured"
          product={{
            name: 'Product a 1',
            price: 100,
            image: 'https://picsum.photos/id/134/320/320',
          }}
        />
        <Product
          variant="featured"
          product={{
            name: 'Product 1',
            price: 100,
            image: 'https://picsum.photos/id/114/800/320',
          }}
        />
        <Product
          variant="featured"
          product={{
            name: 'Product 1',
            price: 100,
            image: 'https://picsum.photos/id/32/320/320',
          }}
        />
        <Product
          variant="featured"
          product={{
            name: 'Product 1',
            price: 100,
            image: 'https://picsum.photos/id/33/320/320',
          }}
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
