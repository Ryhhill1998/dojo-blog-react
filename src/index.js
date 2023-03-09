import './style/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import store from './app/store'
import { Provider } from 'react-redux'

import App from './app/App';
import ErrorPage from "./common/components/ErrorPage/ErrorPage";
import Home from "./routes/Home/Home";
import Create from "./routes/Create/Create";
import PostDetails from "./routes/PostDetails/PostDetails";

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/create",
                element: <Create />,
            },
            {
                path: "/posts/:id",
                element: <PostDetails />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
