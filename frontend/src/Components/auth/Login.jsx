import React, { useState } from 'react'
import { priestLogin } from '../../Services/Apis';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [Phone,setPhone] = useState('');
  const [Password,setPassword] = useState('');
  const Navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const res = await priestLogin({Phone,Password});
    localStorage.setItem("priestToken",res.token)
    Navigate('/register/user');
    alert(res.message)
  }
  return (
    <div >

    <form action="" onSubmit={handleSubmit}>

    <div className='signup'>
      <h3>Login</h3>
        <input placeholder='Enter Phone' required onChange={(e)=>setPhone(e.target.value)} type="tel" name="Phone" id="phone" />
        <input placeholder='Enter Password' required onChange={(e)=>setPassword(e.target.value)} type="password" name="Phone" id="phone" />
        <button   type='submit'>Login</button>
    </div>
    </form>
    <Link to='/forget/pass'>Forget Password</Link>
    </div>
  )
}

export default Login