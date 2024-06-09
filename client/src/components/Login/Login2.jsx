import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { StaffAdminLoginThunk } from "../redux/slices/StaffAdminSlice";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login2.css'; // Import the CSS file
import Header from '../Header/Header';

function Login2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
  } = useForm();

  const { currentUser, loginUserStatus } =useSelector((state) => state.StaffAdminLoginReducer);


  function onLoginFormSubmit(userCred) {
    console.log("from login",userCred);
    dispatch(StaffAdminLoginThunk(userCred));
    console.log("from login status",loginUserStatus);
  }

  useEffect(() => {
 
    if (loginUserStatus) {
      if (currentUser?.userType === "staff") {
        navigate("/staff-profile");
      } else if (currentUser?.userType === "admin") {
        navigate("/admin-profile");
      }
    }
  }, [loginUserStatus, currentUser, navigate]);

  return (
    <div>
      <Header />

      <div className="outer-container">
        <div className="containerl">
          <div className="heading">Login</div>
          <form className="form" onSubmit={handleSubmit(onLoginFormSubmit)}>
            <div className='radio-container'>
              <div className='admin-radio'>
                <p className='radio-label'>Admin</p>
                <input
                  type="radio"
                  value="admin"
                  {...register("userType")}
                  name="userType" // Add name attribute
                />
              </div>
              <div className='staff-radio'>
                <p className='radio-label'>Staff</p>
                <input
                  type="radio"
                  value="staff"
                  {...register("userType")}
                  name="userType" // Add name attribute
                />
              </div>
            </div>
            <input
              required
              className="input"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              {...register("username")}
            />
            <input
              required
              className="input"
              type="password"
              id="password"
              {...register("password")}
              placeholder="Password"
            />
            <input className="login-button" type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login2;
