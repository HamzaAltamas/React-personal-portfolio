import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
import Rootlayout from './components/Rootlayout';
import About from './pages/About';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


let router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Rootlayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Route>
))
 

const App = () => {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App