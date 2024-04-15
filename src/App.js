import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LogIn from './components/LogIn';
import Browse from './components/Browse';
function App() {
  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<LogIn/>
    },
    {
      path:"/Browse",
      element:<Browse/>
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
