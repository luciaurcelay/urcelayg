import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Photography} from './pages/Photography'

function App(props) {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photography" element={<Photography />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )


}

export default App;


