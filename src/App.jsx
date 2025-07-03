
import './App.css';
import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';
import { Header } from './Component/Header/Header';
import { Home } from './Component/Home';
import { Fotter } from './Component/Fotter/Fotter';
import { About } from './Component/About/AboutUs';
import { Contact } from './Component/Contact';
import { Github } from './Component/Github/GIthub';
import { Login } from './Component/Login/Login';

import { UserDetails } from './Component/UserDetails';
import { Error } from './error';
import RootLayout from './RootLayout';
import Users from './Component/User';

// import '../src/index.css';



let router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      }
      ,
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/User/:id',
        element: <UserDetails />
      },
      {
        path: '/Github',
        element: <Github />

      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/*",
        element: <Error />
      }
    ]
   
  },
    {
        path: '/User',
        element: <Users/>
      }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
