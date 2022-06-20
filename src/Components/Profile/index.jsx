import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.css';

const Profile = () => {
  const auth = useSelector((store) => store.auth);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch('http://localhost:7070/private/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth?.token}`
      }
    })
      .then((resp) => resp.json())
      .then((resp) => setProfile(resp))
  }, [])

  return (
    <div className='profile'>
      <div className='profile__image'>
        <img src={profile.avatar} alt='#' className='profile__img' />
        <Link to='/editProfile' className='profile__button-edit' >Редактировать</Link>
      </div>
      <div className='profile__description'>
        <div className='profile__description-titles'>
          <div>Имя:</div>
          <div>Фамилия:</div>
          <div>Возраст:</div>
        </div>
        <div className='profile__description-values'>
          <div>{profile.name}</div>
          <div>{profile.lastName}</div>
          <div>{profile.age}</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
