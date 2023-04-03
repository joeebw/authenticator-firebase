import './App.css'
import SignIn from './SignIn'
import SignUp from './SignUp'
import UserInterface from './UserInterface'
import { Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/userInterface' element={<UserInterface/>}/>
    </Routes>
    </>
  )
}

export default App
