import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx'; // Layout with the navbar
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import StudentDashboard from './components/Dashboard/dashboard.jsx';
import CoursesPage from './components/Online_course/online_course.jsx';
import TrainingProgramme from './components/TrainingProgramme/TrainingProgramme.jsx';
import LandingPage from './components/Landing/LandingPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<LandingPage/>} /> {/* Top-Level Landing Page */}
      <Route path='/dashboard' element={<StudentDashboard />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/training-programs' element={<TrainingProgramme />} />
      <Route path='/online_course' element={<CoursesPage />} />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

