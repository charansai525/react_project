
// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './Component/Header/Header';
import { Home } from './Component/Home';
import { Fotter } from './Component/Fotter/Fotter';
import { About } from './Component/About/About Us';
import { Contact } from './Component/Contact';
import { Github } from './Component/Github/GIthub';
import { Login } from './Component/Login/Login';
import { Users } from './Component/User';
import { UserDetails } from './Component/UserDetails';




let router = createBrowserRouter(
  [
{
path:"/",
element:
<div>
  <Header/>
  <Home/>
  <Fotter/>
</div>
},
{
  path:'/About',
  element:
  <div>
    <Header/>
    <About/>
    <Fotter/>
  </div>
},
{
  path:'/Contact',
  element:
  <div>
    <Header/> 
    <Contact/>
    <Fotter/>

    
  </div>
},
{
  path:'/User',
  element:
  <div>
    <Header/>
    <Users/>
    
  </div>
},
{
  path:'/User/:id',
  element:
  <div>
    <UserDetails/>
    <UserDetails/>
  </div>
},

{
  path:'/Github',
  element:
  <div>   
    <Header/>
    <Github/>
    <Fotter/>
  </div>

},
{
  path:"/Login",
  element:<div>
    <Header/>
    <Login/>

  </div>
}

  ],
    {
    basename: "/react_project" // ✅ This is critical for GitHub Pages
  }
);


function App() {

  return (
    <>
          <RouterProvider router={router}/>

    </>
  )
}

export default App
