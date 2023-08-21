import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Contact from './routes/Contact';
import ErrorPage from './ErrorPage';
import './index.css';

// https://reactrouter.com/en/main

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // 可以直接指定HTML或是帶入component
    // 因為是指定/路徑，所以只要/下面的路徑不mapping，都會顯示錯誤畫面
    // errorElement: <div>404</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/test',
    element: <div>Hello world test!</div>,
  },
  {
    // :contactId代表要傳入的參數，不傳入會導向錯誤畫面
    path: 'contacts/:contactId',
    element: <Contact />,
  },
]);

// react 17寫法
ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root'),
);

// react 18寫法，看package.json的react版本
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
