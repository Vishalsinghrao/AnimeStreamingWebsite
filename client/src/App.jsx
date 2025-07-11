import './App.css'
import Navbar from './components/Navbar'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Topairing from './pages/Topairing'
import Movies from './pages/Movies'
import Home from './pages/Home'
import Anime from './pages/Anime'
import Popular from './pages/Popular'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Streaming from './pages/Streaming';
import PrivacyPolicy from './pages/PirvacyPolicy';
import Footer from './components/Footer';
import axios from 'axios';
import TermsofService from './pages/TermsofService';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';


axios.defaults.withCredentials = true;


function App() {
  const router = createBrowserRouter([
    <Navbar />,
    {
      path: '/',
      element: <><Navbar /><Home /><Footer /></>
    },
    {
      path: '/anime',
      element: <><Navbar /><Anime /><Footer /></>
    },
    {
      path: '/popular',
      element: <><Navbar /><Popular /><Footer /></>
    },
    {
      path: '/top-airing',
      element: <><Navbar /><Topairing /><Footer /></>
    },
    {
      path: '/movies',
      element: <><Navbar /><Movies /><Footer /></>
    },
    {
      path: '/login',
      element: <><Navbar /><Login /><Footer /></>
    },
    {
      path: '/signup',
      element: <><Navbar /><Signup /><Footer /></>
    }, {
      path: '/video',
      element: (
        <ProtectedRoute>
          <>
            <><Navbar /><Streaming /></>
          </>
        </ProtectedRoute>)
    }, {
      path: '/privacypolicy',
      element: <><Navbar /><PrivacyPolicy /><Footer /></>
    }, {
      path: '/termsofservices',
      element: <><Navbar /><TermsofService /><Footer /></>
    }, {
      path: '/contact',
      element: <><Navbar /><Contact /><Footer /></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
