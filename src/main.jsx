import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Home from './routes/home';
import About from './routes/about';
import Work from './routes/work';
import Contact from './routes/contact';
import Project from './routes/project';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about/',
        element: <About />,
      },
      {
        path: 'work/',
        element: <Work />,
      },
      {
        path: 'work/:projectId',
        element: <Project />,
      },
      {
        path: 'contact/',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
