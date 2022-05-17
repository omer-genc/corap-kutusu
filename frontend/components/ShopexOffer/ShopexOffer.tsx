import React from 'react';

const ShopexOffer = () => {
  return (
    <div className="container mx-auto mt-28">
      <h2 className="text-4xl text-center font-bold text-navy-blue">
        What ÇK Offers?
      </h2>
      <div className="grid grid-cols-4 gap-x-4  gap-y-16 mt-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="col-span-2 lg:col-span-1">
            <div className="max-w-[18rem] mx-auto shadow-lg">
              <div className="bg-pink h-72"></div>
              <div className="text-center mt-4 px-8">
                <h1 className="text-navy-blue font-bold">24/7 Support</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  eveniet consequuntur nisi sed maxime ipsum praesentium
                  expedita totam
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffer;
