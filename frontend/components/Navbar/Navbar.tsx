import React from 'react';
import Button from '../UI/Button';

import style from './style.module.css';

function Navbar() {
  return (
    <div className={style.wrapper}>
      <nav className={style.nav}>
        <h1 className={style.logo}>ÇK</h1>
        <ul className={style.navList}>
          <li>Marka</li>
          <li>Renkli</li>
          <li>Çizgi Karakter</li>
          <li>Blog</li>
          <li>İLetişim</li>
        </ul>
        <div className={style.search}>
          <input type="text" className={style.searchInput} />
          <Button variant="pink">
            <i className="bi bi-search text-white"></i>
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
