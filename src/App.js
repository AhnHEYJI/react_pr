import React, { Suspense,lazy} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));


const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<mian />}>

    <Routes>
      <Route path ='/'element={<Home/>} />
      <Route path ='/today'element={<Today/>}/>
      <Route path ='/developer'element={<Developer/>}/>
    
    </Routes>
    </Suspense>
    </BrowserRouter>
  ) 
}

export default App