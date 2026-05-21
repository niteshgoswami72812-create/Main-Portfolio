// main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Tailwind from './Tailwind'
import Contact from './Pages/Contact'
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Tailwind />,
  },

  {
    path: "/home",
    element: <Tailwind />,  
  },

  {  
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)