 
 
import { Route,Routes } from 'react-router-dom'
import './App.css'
 
import Home from './pages/Home'
import Movies from './pages/Movies'
import Watch from './pages/Watch'
 

 

function App() {
  

  return (
    <>
        

   <Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/movies' element={<Movies/>} />
    <Route path='/watch/:id' element={<Watch />} />
     
    </Routes>
    
    
   
    </>
  )
}

export default App
