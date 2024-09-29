import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Login from './components/Login/Login.jsx'
import StudentDashboard from './components/Dashboard/dashboard.jsx'
import CoursesPage from './components/Online_course/online_course.jsx'
import CategoryPage from './components/Online_course/course_ category.jsx'
import VIRTUAL_LAB from './components/Virtual_lab/virtualLab.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='' element={<StudentDashboard />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/online_course' element={<CoursesPage />} />
      <Route path='/online_course/:categoryId' element={<CategoryPage />} />
      <Route path='/virtual_lab' element={<VIRTUAL_LAB />} />
      <Route path='user/:userid' element={<User />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

