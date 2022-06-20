import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './style.css';
import { checkStatusAndJson } from '../App/utils';
import { SET_AUTH } from '../../Store/action-types';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:7070/auth ', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        login: login,
        password: password
      })
    })
      .then(checkStatusAndJson)
      .then(({ token }) => {
        dispatch({ type: SET_AUTH, payload: { token, isAuth: true } });
        localStorage.setItem('token', token);
        navigate('/news');
      })
      .catch((console.error))
  }

  return (
    <div className='login'>
      <form onSubmit={onFormSubmit} className='login__form'>
        <input placeholder='логин' type='text' value={login} onChange={onLoginChange} className='input__login'/>
        <input placeholder='пароль' type='password' value={password} onChange={onPasswordChange} className='input__password' />
        <button type='submit' className='form__button'>Войти</button>
      </form>
    </div>
  )
}

export default LoginPage;
