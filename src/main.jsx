import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Layout/Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import ReviewOrders from './components/ReviewOrders/ReviewOrders';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('tShirts.json')
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/review',
        element: <ReviewOrders></ReviewOrders>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
