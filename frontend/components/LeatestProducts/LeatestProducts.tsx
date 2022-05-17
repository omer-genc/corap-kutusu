import Link from 'next/link';
import React from 'react';
import Product from '../Product';

const LeatestProducts = () => {
  return (
    <div className="container mx-auto mt-28">
      <h2 className="text-4xl text-center font-bold text-navy-blue">
        Leatest Products
      </h2>
      <ul className="my-4 flex justify-center gap-4 text-navy-blue">
        <li>
          <Link href="#">New Arrival</Link>
        </li>
        <li>
          <Link href="#">Best Seller</Link>
        </li>
        <li>
          <Link href="#">Featured</Link>
        </li>
        <li>
          <Link href="#">Special Offer</Link>
        </li>
      </ul>

      <div className="container mt-8 flex flex-wrap gap-y-12 justify-center md:justify-between">
        <Product
          variant="latest"
          product={{
            name: 'Product a 1',
            price: 100,
            image: 'https://picsum.photos/id/103/320/320',
          }}
        />
        <Product
          variant="latest"
          product={{
            name: 'Product a 1',
            price: 100,
            image: 'https://picsum.photos/id/106/320/320',
          }}
        />
        <Product
          variant="latest"
          product={{
            name: 'Product a 1',
            price: 100,
            image: 'https://picsum.photos/id/107/320/320',
          }}
        />
        <Product
          variant="latest"
          product={{
            name: 'Product a 1',
            price: 100,
            image: 'https://picsum.photos/id/108/320/320',
          }}
        />
        <Product
          variant="latest"
          product={{
            name: 'Product a 1',
            price: 100,
            image: 'https://picsum.photos/id/109/320/320',
          }}
        />
        <Product
          variant="latest"
          product={{
            name: 'Product a 1',
            price: 100,
            image: 'https://picsum.photos/id/110/320/320',
          }}
        />
      </div>
    </div>
  );
};

export default LeatestProducts;
