import './App.css'
import Main from './components/Main';
import Home from './features/home/Home';
import ErrorPage from './features/error/ErrorPage';
import About from './features/about/About';
import Contact from './features/contact/Contact';
import Projects from './features/projects/Projects';
import Github from './features/github/Github';
import Settings from './features/settings/Settings';
import {ThemeProvider} from './context/ThemeContext';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([

  {
    element: <Main/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contact/>,
      }, 
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path:"/github",
        element: <Github/>,
        //loader: Githubloader,
      },
      {
        path: "/settings",
        element: <Settings/>,
      }
    ]
  }

])
function App() {
  

  return (
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
