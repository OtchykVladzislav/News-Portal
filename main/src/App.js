import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './components/route/About';
import Posts from './components/route/Posts';
import MyNavBar from './components/UI/MyNavBar/MyNavBar';

function App() {
  return(
    <BrowserRouter>
    <MyNavBar/>
    <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/posts" element={<Posts />}/>
      <Route path="*" to="/posts"/>
    </Routes>
    </BrowserRouter>
  )
}

export default App