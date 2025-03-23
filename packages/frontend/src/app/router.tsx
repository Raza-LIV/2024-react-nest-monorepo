import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { Error404Page } from '../pages/error-404';
import { Error500Page } from '../pages/error-500';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/home'),
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/server-error',
    element: <Error500Page />,
  },
  {
    path: '*',
    element: <Error404Page />,
  },
]);
