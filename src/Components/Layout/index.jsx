import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Loading from '../Loading';
import Navigation from '../Navigation';
import Login from '../Login';
import SideBar from '../SideBar';
import { SET_AUTH } from '../../Store/action-types';

import './style.css';

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkAuth, setCheckAuth] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      fetch('http://localhost:7070/private/check', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((resp) => {
          if (resp.status === 200) {
            dispatch({ type: SET_AUTH, payload: { token, isAuth: true } });
            setIsAuth(true);
          } else {
            navigate('/login');
          }
        })
        .catch(() => {
          navigate('/login');
        })
        .finally(() => setCheckAuth(true));
    } else {
      setCheckAuth(true);
      navigate('/login');
    }
  }, [token]);

  if (!checkAuth) {
    return <Loading />;
  }

  if (!isAuth) {
    return <Outlet />
  }

  return (
    <div className='layout'>
      <div>
        <Navigation />
      </div>
      <div className='main__content'>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;
