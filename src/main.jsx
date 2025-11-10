import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home/Home.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import App from './App.jsx'
import About from './Components/Aboutus/About.jsx'
import Game from './Components/Questions/Game/game.jsx'
import Contact from './Components/Contact/Contact.jsx'
import CommentSection from './Components/Questions/Comments-section/commentSection.jsx'
import User,{gitAlert} from './Components/user/User.jsx'

// const router = createBrowserRouter([
//     {
//       path:'/',
//       element:<App/>,
//       children:[
//         {
//           path:'',
//           element:<Home/>
//         },
//         {
//           path:'about',
//           element:<About/>
//         },
//         {
//           path:'contact',
//           element:<Contact/>
//         }
//       ]
//     }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='game' element={<Game/>}/>
     <Route path='comments' element={<CommentSection/>}/>
    <Route loader={gitAlert} path='github/:name' element={<User/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
      <RouterProvider router={router}/>
)
