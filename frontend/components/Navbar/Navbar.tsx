import React from 'react';
import Button from '../UI/Button';

function Navbar() {
  return (
    <div className="w-full bg-pantone-purple h-24">
      <div className="container mx-auto flex items-center h-full text-lg">
        <h1 className="text-5xl">ÇK</h1>
        <ul className="flex gap-5 ml-8 ">
          <li>Marka</li>
          <li>Renkli</li>
          <li>Çizgi Karakter</li>
          <li>Blog</li>
          <li>İLetişim</li>
        </ul>
        <div className="ml-auto">
          <input type="text" className="p-2" />
          <Button variant="pink">
            <i className="bi bi-search text-white"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
