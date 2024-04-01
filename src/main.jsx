import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import Error from './components/Error.jsx'
import AddNews from './components/AddNews.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import UserContextProvider from './components/UserContextProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/addnews',
    element: <AddNews/>,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error />,
  }
  ,
  {
    path: '/signup',
    element: <Signup/>,
    errorElement: <Error />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
)
