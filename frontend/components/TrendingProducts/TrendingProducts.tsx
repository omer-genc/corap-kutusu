import React from 'react';
import Product from '../Product';

const TrendingProducts = () => {
  return (
    <div className="mt-28 container mx-auto">
      <h2 className="text-4xl text-center font-bold text-navy-blue h-1/6">
        Trendin Products
      </h2>

      <div className="grid grid-cols-8 h-5/6 gap-8 mt-6">
        <div className="col-span-8 md:col-span-4 xl:col-span-2 row-span-1">
          <Product
            variant="featured"
            product={{
              name: 'Product a 1',
              price: 100,
              image: 'https://picsum.photos/id/204/320/320',
            }}
          />
        </div>
        <div className="col-span-8 md:col-span-4 xl:col-span-2 row-span-1">
          <Product
            variant="featured"
            product={{
              name: 'Product a 1',
              price: 100,
              image: 'https://picsum.photos/id/124/320/320',
            }}
          />
        </div>
        <div className="col-span-8 md:col-span-4 xl:col-span-2 row-span-1">
          <Product
            variant="featured"
            product={{
              name: 'Product a 1',
              price: 100,
              image: 'https://picsum.photos/id/102/320/320',
            }}
          />
        </div>
        <div className="col-span-8 md:col-span-4 xl:col-span-2 row-span-1">
          <Product
            variant="featured"
            product={{
              name: 'Product a 1',
              price: 100,
              image: 'https://picsum.photos/id/134/320/320',
            }}
          />
        </div>

        <div className="col-span-8 lg:col-span-3 bg-sky-blue"></div>
        <div className="col-span-8 lg:col-span-3 bg-sky-blue"></div>
        <div className="col-span-8 lg:col-span-2 flex flex-row flex-wrap justify-around lg:flex-nowrap lg:flex-col gap-4">
          <div className="h-1/3">
            <Product
              variant="mini"
              product={{
                name: 'Product a 1',
                price: 100,
                image: 'https://picsum.photos/id/204/320/320',
              }}
            />
          </div>
          <div className="h-1/3">
            <Product
              variant="mini"
              product={{
                name: 'Product a 1',
                price: 100,
                image: 'https://picsum.photos/id/204/320/320',
              }}
            />
          </div>
          <div className="h-1/3">
            <Product
              variant="mini"
              product={{
                name: 'Product a 1',
                price: 100,
                image: 'https://picsum.photos/id/204/320/320',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
