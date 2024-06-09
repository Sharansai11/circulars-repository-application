import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { json } from 'react-router-dom';
import './AddUser.css'
import { axiosWithToken } from '../../AxiosWithToken';

const AddUser = () => {

  let { register, handleSubmit } = useForm();

  const [err, setErr] = useState("");
  const [state, setState] = useState(false);
  
  async function onRegisterFormSubmit(userCrdentialsObject) {
    userCrdentialsObject.userId = Date.now();
    userCrdentialsObject.status = true;
      try {
        const typeOfRole= userCrdentialsObject.userType === "staff" ? "staff" : "admin";


        const res = await axiosWithToken.post(`http://localhost:4000/admin-api/${typeOfRole}`, userCrdentialsObject);
        console.log(res);
        if (res.data.message === "User created") {
          setState(true);
          setErr("");
        } else {
          setErr(res.data.message);
        }
      } catch (error) {
        console.error("Error during signup:", error);
        setErr("Failed to register. Please try again.");
      }
    }

    return (
        <div className='container'>
        <h1 className="heading ">User Registeration  form</h1>
      <form
        action=""
        className="form"
        onSubmit={handleSubmit(onRegisterFormSubmit)}
      >
        
        {/* username */}
          
          <input placeholder='Username'
           className="input"
            type="text"
            {...register("username")}
            id="username"
          />
        {/* name */}
             <input
          className="input" placeholder='Name'
            type="text"
            {...register("name")}
            id="name"
          />

        {/* password */}
        
          <input type="password" placeholder='Password' {...register("password")}
            id="password"
            className="input" />
        
      <div className='radio-container'>
       <div className='admin-radio'>
       <p>Admin</p>
        <input
          type="radio"
                value="admin"
              name="userType"
                {...register("userType")}        />
       </div>

       <div className='staff-radio'>
       <p>Staff</p>
         <input
          type="radio"
                value="staff"
                name="userType"
          {...register("userType")}
        />
       </div>
       </div>

        <br />
        
        <button
          type="submit"
          className="login-button"
        >
          Register
        </button>
      </form>
    </div>
  );
    
};

export default AddUser;
