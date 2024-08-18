import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { registration, updateProfile } from '../../Services/Apis';
import { Navigate, useNavigate } from 'react-router-dom';
import ContextProvider from '../../Context/ContextProvider';
import { Loading } from '../Loader';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const SignUp = ({button,heading,user_id}) => {
  const [profile,setProfile] = useState('');
  const [isEdit,setEdit] = useState(heading);
  const {priest,setPriest,setTokenExits} = useContext(ContextProvider);
  const [loading,setLoading] = useState(false);
  const Navigate = useNavigate();

    const handleProfile = async (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", "vikashmishra");
       setLoading(true)
        await axios
          .post("https://api.cloudinary.com/v1_1/dwjh8zji6/image/upload", formData)
          .then((resp) => {
           setLoading(false)
            setProfile(resp.data.url);
            priest.Profile = resp.data.url;
          })
          .catch((err) => {
            setLoading(false);
            console.log(err)
          });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(isEdit){
          setLoading(true)
          const res = await updateProfile(priest);
          setLoading(false)
          if(res.success){
            Swal.fire({
              position: "center",
              icon: "success",
              text: res.message,
              showConfirmButton: false,
              timer: 1100
            });
            Navigate('/user');
          }
        }
        else{
        setLoading(true)
        console.log(priest)
        const res = await registration(priest);
        setLoading(false);
        if(res.success){
          Cookies.set("priestToken",res.token)
          setTokenExits(true)
          Navigate('/user')
          Swal.fire({
            position: "center",
            icon: "success",
            text: res.message,
            showConfirmButton: false,
            timer: 1100
          });
         
         
        }
        
       }
      };
      const handleChange = (e) => {
        setPriest({ ...priest, [e.target.name]: e.target.value })
      };
  return (
    <div className='login-container' >
{
  loading&&<Loading/>
}
    <form action="" className='login-form' onSubmit={handleSubmit}>

    <div className='signup'>
        <div>
            {isEdit?<h3>{heading}</h3>:<h3>SignUp</h3>}
        </div>
        <input required value={priest.Name} onChange={handleChange} name='Name' type="text" placeholder='Your Name' />
        <input required value={priest.Phone} onChange={handleChange} name='Phone' type="tel" placeholder='Phone Number' />
        <input required value={priest.Whatsapp} onChange={handleChange} name='Whatsapp' type="tel" placeholder='Whatsapp' />
        <textarea style={{maxWidth:'100%'}} type="text" value={priest.Bio} placeholder='Bio' name='Bio' onChange={handleChange} required  />
        <input required  onChange={handleChange} name='Password' type="password" placeholder={isEdit?'Enter New Password':'Set Password'} />
        <input  onChange={handleProfile} name='Profile' type="file"  />
        <div>
            {profile&&<img height={50} width={30} src={profile} alt="" />}
        </div>
        {isEdit?<button disabled={loading} type='submit'>{button}</button>:<button disabled={loading} type='submit'>Submit</button>}
    </div>
    </form>
    </div>
  )
}

export default SignUp