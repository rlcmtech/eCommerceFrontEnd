import React from 'react';
import Header from './Nav/Header';
import Homepage from './component/Homepage';
import Footer from './Nav/Footer';
import { Routes, Route, HashRouter } from 'react-router-dom';


const App = () => {
  return (
    <div>
<HashRouter>
      <Header/>
      <Homepage/>
      <Footer/>
</HashRouter> 
    </div>
  )
}

export default App
