import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Blogs from './pages/Blogs';
import Blogsdetails from './pages/Blogsdetails';

const allRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'course',
    element: <Course />
  },
  {
    path:'blog',
    element:<Blogs />
  },
  {
    path:'blog/:id',
    element:<Blogsdetails />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allRoutes} />
  </StrictMode>
);
