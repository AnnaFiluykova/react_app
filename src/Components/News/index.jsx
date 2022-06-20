import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.css';

const News = () => {
  const [news, setNews] = useState([]);
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    fetch('http://localhost:7070/private/news', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth?.token}`
      }
    }).then((resp) => resp.json())
      .then((resp) => setNews(resp))
  }, [])

  return (
    <div className='news__container'>
      {news.map((item, index) => {
        return (
          <div className='news__item' key={index}>
            <Link className='news__item-link' to={`/news/${item.id}`}>
              <img src={item.image} alt='' className='news__item-img' />
              <div className='news__item-content'>
                <div className='news__item-title'>{item.title}</div>
                <div className='news__item-text'>{item.content}</div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default News;
