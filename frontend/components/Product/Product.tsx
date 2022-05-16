import Image from 'next/image';
import React from 'react';
import Button from '../UI/Button';

import style from './style.module.css';

type Props = {
  variant: string;
  product: {
    name: string;
    price: number;
    image: string;
  };
};

const Product: React.FC<Props> = ({ variant, product }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className={
        'w-72 h-[26rem] bg-white shadow-md ' +
        (hover ? 'bg-navy-blue' : 'bg-white')
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-full h-72 relative">
        {hover && (
          <div className="absolute w-full h-full right-0 left-0 z-10  flex justify-center items-end">
            <Button className=" mb-2" variant="pink">
              View Details
            </Button>
          </div>
        )}
        <Image
          src={product.image}
          alt="slide 1"
          objectFit="cover"
          width={288}
          height={288}
          className="w-full h-full"
        />
      </div>

      <div className="text-center pt-4 text-white">
        <header className={'font-bold text-xl ' + (!hover && 'text-pink')}>
          {product.name}
        </header>
        <span className={' mt-2 block ' + (!hover && 'text-navy-blue')}>
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Product;
