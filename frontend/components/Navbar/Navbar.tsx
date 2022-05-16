import React from 'react';
import Button from '../UI/Button';

import style from './style.module.css';

function Navbar() {
  return (
    <div className="w-full  h-24">
      <div className="container mx-auto grid grid-cols-12 gap-2 h-full text-lg items-center">
        <h1 className="text-5xl col-span-1">ÇK</h1>
        <ul className="flex gap-4 col-span-7">
          <li>Marka</li>
          <li>Renkli</li>
          <li>Çizgi Karakter</li>
          <li>Blog</li>
          <li>İLetişim</li>
        </ul>
        <div className="ml-auto col-span-4 flex">
          <input type="text" className={style.searchInput} />
          <Button variant="pink">
            <i className="bi bi-search text-white"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
