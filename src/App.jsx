import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import Home from './components/Home';
import Test from './components/Test';

const App = () => {
  console.log('wacho test');
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<Test value={{ id: 'ETC-2222' }} />} />

      {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
      {/* <Route path='*' element={<NoMatch />} /> */}
    </Routes>
  );
};

export default App;
