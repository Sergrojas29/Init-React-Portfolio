import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SingleProjectPage from './pages/SingleProjectPage';
import style from "./App.css"
import singleProject from "./style/singleProject.css"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'project',
        element: <ProjectPage />,
      },
      {
        path: 'contactme',
        element: <ContactPage />,
      },
      {
        path: 'aboutme',
        element: <AboutPage />,
      },
      {
        path: 'project/:projectNumber',
        element: <SingleProjectPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);