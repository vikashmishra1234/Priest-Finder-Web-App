import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { registration, updateProfile } from '../../Services/Apis';
import { Navigate, useNavigate } from 'react-router-dom';
import ContextProvider from '../../Context/ContextProvider';
const SignUp = ({button,heading,user_id}) => {
  const [profile,setProfile] = useState('');
  const [isEdit,setEdit] = useState(heading);
  const {priest,setPriest} = useContext(ContextProvider);
  const Navigate = useNavigate();

    const handleProfile = async (e) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", "vikashmishra");
       
        await axios
          .post("https://api.cloudinary.com/v1_1/dwjh8zji6/image/upload", formData)
          .then((resp) => {
           
            setProfile(resp.data.url);
            priest.Profile = resp.data.url;
          })
          .catch((err) => console.log(err));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(isEdit){
          const res = await updateProfile(priest);
          if(res.success){
            alert(res.message);
            Navigate('/register/user');
          }
        }
        else{
        
        const res = await registration(priest);
        if(res.success){
          localStorage.setItem("priestToken",res.token)
          alert(res.message);
          Navigate('/register/user');
        }
        
       }
      };
      const handleChange = (e) => {
        setPriest({ ...priest, [e.target.name]: e.target.value })
      };
  return (
    <div >

    <form action="" onSubmit={handleSubmit}>

    <div className='signup'>
        <div>
            {isEdit?<h3>{heading}</h3>:<h3>SignUp</h3>}
        </div>
        <input required value={priest.Name} onChange={handleChange} name='Name' type="text" placeholder='Your Name' />
        <input required value={priest.Phone} onChange={handleChange} name='Phone' type="tel" placeholder='Phone Number' />
        <input required value={priest.Whatsapp} onChange={handleChange} name='Whatsapp' type="tel" placeholder='Whatsapp' />
        <input required  onChange={handleChange} name='Password' type="password" placeholder={isEdit?'Enter New Password':'Set Password'} />
        <input  onChange={handleProfile} name='Profile' type="file"  />
        <div>
            {profile&&<img height={50} width={30} src={profile} alt="" />}
        </div>
        {isEdit?<button type='submit'>{button}</button>:<button type='submit'>Submit</button>}
    </div>
    </form>
    </div>
  )
}

export default SignUp