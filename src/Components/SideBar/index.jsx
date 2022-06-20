import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const SideBar = () => {
  return (
    <div className='side-bar'>
      <Link className='side-bar__link' to={'/profile'}>Мой профиль</Link>
      <Link className='side-bar__link' to={'/news'}>Новости</Link>
    </div>
  )
}

export default SideBar;
