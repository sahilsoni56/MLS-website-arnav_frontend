import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Landing_page from './screens/Landing_page.jsx'
import Cart from './screens/Cart.jsx'
import Login from './screens/Account/Login.jsx'
import Register from './screens/Account/Registration.jsx'

const routes = createBrowserRouter(
  [
    {
      path:"/",
      element: <Landing_page/>
    },
    {
      path:"/cart",
      element: <Cart/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/register",
      element: <Register/>
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={routes}/>
  </React.StrictMode>,
)
