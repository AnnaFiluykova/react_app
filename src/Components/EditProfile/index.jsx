import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { SET_PROFILE } from '../../Store/action-types';
import Profile from '../Profile';

const EditProfile = () => {
  const profile = useSelector((store) => store.profile);
  const auth = useSelector((store) => store.auth);
  const [name, setName] = useState(profile.name);
  const [lastName, setLastName] = useState(profile.lastName);
  const [age, setAge] = useState(profile.age);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onInputNameChange = (e) => {
    setName(e.target.value);
  }

  const onInputLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const onInputAgeChange = (e) => {
    setAge(e.target.value);
  }

  const onClickSave = () => {
    fetch('http://localhost:7070/private/me', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${auth?.token}`,
        'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        name,
        lastName,
        age
      })
    })
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch({ type: SET_PROFILE, payload: resp });
      })
  }

  const onClickCancel = () => {
    navigate('/profile');
  }

  return (
    <div className='editProfile'>
      <div>
        <div>Имя:</div>
        <div>Фамилия:</div>
        <div>Возраст:</div>
      </div>
      <div>
        <input className='editProfile__input' type='text' value={name} onChange={onInputNameChange} />
        <input className='editProfile__input' type='text' value={profile.lastName} onChange={onInputLastNameChange} />
        <input className='editProfile__input' type='number' value={profile.age} onChange={onInputAgeChange} />
      </div>
      <button className='editProfile__button' onClick={onClickSave}>Сохранить</button>
      <button className='editProfile__button' onClick={onClickCancel}>Отмена</button>
    </div>
  )
}

export default EditProfile;
