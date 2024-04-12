import React from 'react'
import Home from './Home/Home'
import Course from './component/Course'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './component/Signup'
const App = () => {
  return (
  //   <div>
  //    <Home/>
  //  <Course/>
  //   </div>

  <>
      <div className='dark:bg-slate-900 dark:text-white'>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
 <Route path='/course' element={<Courses/>}/>
 {/* <Route path='/about' element={<About/>}/>
 <Route path='/contact' element={<Contact/>}/> */}
 <Route path='/signup' element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
 </div>
  </>
  )
}

export default App
