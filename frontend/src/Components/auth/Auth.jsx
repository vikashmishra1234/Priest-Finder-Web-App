import React, { useEffect, useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import './style.scss'
import { Navigate, useNavigate } from "react-router-dom";

const Auth = () => {

   
  const [show, setShow] = useState(false);
 
  
 
  return (
    <>
    <div className="form-container">

      <>
        {!show && <Login  />}
        {show && (
          <SignUp
           
          />
        )}{" "}
      </>
    </div>
      <div className="form-heading">
        {!show && (
          <h3 onClick={() => setShow(!show)}>do not have an account?</h3>
        )}
        {show && (
          <h3 onClick={() => setShow(!show)}>Already have an account</h3>
        )}
      </div>
    </>
  );
};

export default Auth;
