import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import LoginPage from '../Login';
import News from '../News';
import Layout from '../Layout';
import Post from '../Post';
import Profile from '../Profile';
import EditProfile from '../EditProfile';

import store from '../../Store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/news' element={<News />} />
            <Route path='/news/:postId' element={<Post />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/editProfile' element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
