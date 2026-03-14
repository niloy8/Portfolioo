import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './Components/Layout/Layout.tsx';
import Home from './Home/Home.tsx';
import Experience from './Components/Experience/Experience.tsx';
import Contact from './Components/Contact/Contact.tsx';
import Projects from './Components/Projects/Project.tsx';
import Qualifications from './Components/Qualifications/Qualifications.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }, 
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/qualifications",
        element: <Qualifications />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
