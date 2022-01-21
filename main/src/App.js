import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './components/route/About';
import Home from './components/route/Home';
import Posts from './components/route/Posts';
import Error from './components/route/Error';
import MyNavBar from './components/UI/MyNavBar/MyNavBar';
import Rates from './components/route/Rates';

function App() {
  return(
    <BrowserRouter>
    <MyNavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/posts" element={<Posts />}/>
      <Route path="/rates" element={<Rates />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App