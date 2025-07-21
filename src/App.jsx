import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Contack from './Pages/Contack'
import Blogs from './Pages/Blogs'
import Error from './Pages/Error'
import NavBar from './Components/NavBar'
import Details from './Pages/Details'
import { useState } from 'react'
import Protected from './Pages/Protected'


function App() {

  const [isLogin, setIslogin]=useState(false);



  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/'  element={<Home />}   />
        <Route path='/contact' element={<Contack />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:name' element={<Protected isLogin={isLogin} >
          <Details />
        </Protected>} />
        <Route path='*' element={<Error />} />
      </Routes>
      <button onClick={()=>setIslogin(!isLogin)}>{isLogin ? 'Logout': 'Login'}</button>
    </BrowserRouter>
  )
}

export default App;
