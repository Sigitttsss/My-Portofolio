import React from 'react'
import HomePages from './pages/HomePages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPortfolio from './components/DetailPortofolio';
import Experience from './pages/Experience';
import PageNotFound from './pages/PageNotFound';

function App() {
 return (
  <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePages />}/>
            <Route path='/portofolio/:id' element={<DetailPortfolio />}/>
            <Route path='/experience' element={<Experience />}/>
            <Route path='*' element={<PageNotFound />}/>
        </Routes>
       </BrowserRouter>
  </>
 );
}

export default App
