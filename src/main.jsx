import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Members from './routes/Members.jsx'
import Customers from './routes/Customers.jsx'
import Billings from './routes/Billings.jsx'
import Plans from './routes/Plans.jsx'
import DocType from './routes/DocType.jsx'
import Properties from './routes/Properties.jsx'
import Integrations from './routes/Integrations.jsx'

// const router =  createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: 'contact', element: <Contact /> },
// ]);

const router =  createBrowserRouter([
  { path: '/', 
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "members",
      element: <Members />,
    },
    {
      path: "customers",
      element: <Customers />,
    },
    {
      path: "billings",
      element: <Billings />,
    },
    {
      path: "plans",
      element: <Plans />,
    },
    {
      path: "doctype",
      element: <DocType />,
    },
    {
      path: "properties",
       element: <Properties />,
    },
    {
      path: "integrations",
      element: <Integrations />,
    },
  ] 
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
