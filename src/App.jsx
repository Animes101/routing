import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Contack from './Pages/Contack'
import Blogs from './Pages/Blogs'
import Error from './Pages/Error'
import NavBar from './Components/NavBar'
import Details from './Pages/Details'
import User from './Pages/User'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/'  element={<Home />}   />
        <Route path='/contact' element={<Contack />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:name' element={<Details />} />
        <Route path='*' element={<Error />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
