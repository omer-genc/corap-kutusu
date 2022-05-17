import Image from 'next/image';
import React from 'react';
import Button from '../UI/Button';

const FeaturedProduct = () => {
  return (
    <div className="w-full mt-32 bg-sky-blue">
      <div className="container h-[30rem] grid grid-cols-12 gap-8 mx-auto py-16">
        <div className="col-start-4 col-span-3 bg-pink flex justify-end relative">
          <Image
            src="https://picsum.photos/id/103/320/320"
            alt="slide 1"
            objectFit="cover"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="col-span-4  flex flex-col justify-between">
          <h1 className="text-3xl text-navy-blue font-bold">
            Unique Features Of Leatest & Trending Products
          </h1>
          <ol className="mt-8 space-y-3 text-gray">
            <li className="flex justify-center items-star gap-2">
              <div>
                <span className="bg-pink text-pink rounded-full h-3 w-3 inline-block"></span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                modi! Lorem ipsum dolor sit amet.
              </div>
            </li>
            <li className="flex justify-center items-star gap-2">
              <div>
                <span className="bg-purple rounded-full h-3 w-3 inline-block"></span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                modi! Lorem ipsum dolor sit amet.
              </div>
            </li>
            <li className="flex justify-center items-star gap-2">
              <div>
                <span className="bg-green rounded-full h-3 w-3 inline-block"></span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                modi! Lorem ipsum dolor sit amet.
              </div>
            </li>
          </ol>
          <div className="mt-8 flex gap-4 items-center ">
            <Button variant="pink">Add To cart</Button>
            <span>
              <p className="text-navy-blue">Lorem ipsum dolor sit.</p>
              <p className="text-navy-blue">$32.00</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
