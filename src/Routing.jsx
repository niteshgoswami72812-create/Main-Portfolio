import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Resume from './Pages/Resume.jsx'

import Tailwind from './Tailwind.jsx'


  

 
const Routing = () => {
    return (
<>
        <Routes>

            <Route path='/' element={<Tailwind />}>
                <Route path='home' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} /> 
                <Route path='Resume' element={<Resume />} />

            </Route>
        </Routes>
      
        </>
    )
}
export default Routing 