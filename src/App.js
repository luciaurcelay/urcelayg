import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Photography} from './pages/Photography'

function App() {

  const router = createBrowserRouter([
    {
      path: "/urcelayg/",
      element: <Home />,
    },
    {
      path: "/urcelayg/about",
      element: <About />,
    },
    {
      path: "/urcelayg/photography",
      element: <Photography />,
    }

  ])

  return (
    <RouterProvider router={router}/>
  )
    

}

export default App;


