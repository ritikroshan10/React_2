import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx";
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';
import "./App.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='testimonials' element={<Testimonials />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


