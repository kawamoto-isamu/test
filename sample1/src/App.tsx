import React, {useState} from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header      from 'components/02_organisms/header/header';
import Footer      from 'components/02_organisms/footer/footer';
import Home        from 'components/03_pages/home/home';
import Plans       from 'components/03_pages/plans/plans';
import Contact     from 'components/03_pages/contact/contact';
import './App.scss';

const App = () => {
  return (
    <div
      className={'app-root'}
    >
      <Header/>
      <div className='contents'>
        <Routes>
            <Route path='/'            element={<Home/>}/>
            <Route path="/plans"       element={<Plans />} />
            <Route path="/contact"       element={<Contact />} />
          </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
