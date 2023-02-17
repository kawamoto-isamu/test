import React, {useState} from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header      from 'components/02_organisms/header/header';
import Footer      from 'components/02_organisms/footer/footer';
import FloatUpTest from 'components/02_organisms/floatUpTest/floatUpTest';
import Home        from 'components/03_pages/home/home';
import About       from 'components/03_pages/about/about';
import Works       from 'components/03_pages/works/works';
import './App.scss';

const App = () => {
  return (
    <div
      className={'app-root'}
      // style={{ backgroundImage: `url(${back_1})` }}
    >
      <Header/>
      <div>
        <Routes>
            <Route path='/'            element={<Home/>}/>
            <Route path="/about"       element={<About />} />
            <Route path="/works"       element={<Works />} />
            <Route path="/floatUpTest" element={<FloatUpTest />} />
          </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
