import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.css';

const Post = () => {
  const { postId } = useParams();
  const [post, getPost] = useState({});
  const auth = useSelector((store) => store.auth)

  useEffect(() => {
    fetch(`http://localhost:7070/private/news/${postId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth?.token}`
      }
    })
      .then((resp) => resp.json())
      .then((resp) => getPost(resp))

  },[])

  return (
    <div className='post__container'>
      <div className='post__container-card'>
        <img src={post?.image} alt='#' className='post__container-img' />
        <div className='post__container-content'>
          <div className='post__container-title'>{post?.title}</div>
          <div className='post__container-text'>{post?.content}</div>
        </div>
      </div>
      <Link className='post__container-nav' to='/news'>Перейти обратно</Link>
    </div>
  )
}

export default Post;
