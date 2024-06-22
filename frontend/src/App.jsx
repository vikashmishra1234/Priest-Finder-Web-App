import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Auth from './Components/auth/Auth'
import Registration from './Components/Resgistration/Registration'
import SignUp from './Components/auth/SignUp'
import ContextState from './Context/ContexState'
import SearchPriest from './Components/searchPriest/SearchPriest'
import ProfilePriest from './Components/searchPriest/ProfilePriest'
import ForgetPass from './Components/auth/ForgetPass'
import Restaurent from './Components/Restaurents/Restaurent'
import Home from './Components/Home/Home'
import Footer from './Components/footer/Footer'

const App = () => {
  const [changes,setChanges] = useState(Math.random())
  return (
    
      
   
    <ContextState>

    <Router>
        <Navbar/>
      <Routes>
        <Route exact path='/register' element={<Auth/>}/>
        <Route exact path='/priest/find' element={<SearchPriest changes={changes} key={Math.random()} />}/>
        <Route exact path='/priest' element={<ProfilePriest setChanges={setChanges}/>}/>
        <Route exact path='/user/edit' element={<SignUp key={Math.random()} heading={"Edit Profile"} button={"Update"}/>}/>

        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/restaurent' element={<Restaurent/>}/>
        <Route exact path='/forget/pass' element={<ForgetPass/>}/>
        <Route exact path='/register/user' element={<Registration/>}/>
      </Routes>
    
    </Router>
    </ContextState>
  )
}

export default App