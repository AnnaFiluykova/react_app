import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PROFILE } from '../../Store/action-types';

import './style.css';

const Navigation = () => {
  const auth = useSelector((store) => store.auth);
  const profile = useSelector((store) => store.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile.isLoaded) {
      fetch('http://localhost:7070/private/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth?.token}`
        }
      })
        .then((resp) => resp.json())
        .then((resp) => {
          dispatch({ type: SET_PROFILE, payload: resp });
        })
    }
  }, [])

  return (
    <div className='navigation'>
      <div>{profile.name}</div>
      <img src={profile.avatar} alt='#' className='navigation__image' />
    </div>
  )
}

export default Navigation;
