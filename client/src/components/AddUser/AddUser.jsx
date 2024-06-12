import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddUser.css';

const AddUser = () => {
  const token = localStorage.getItem('token')
  const axiosWithToken = axios.create({
    headers: { Authorization: `Bearer ${token}` }
  })

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [err, setErr] = useState("");
  const [state, setState] = useState(false);

  async function onRegisterFormSubmit(userCredentialsObject) {
    userCredentialsObject.userId = Date.now(); // Consider using a UUID library here
    userCredentialsObject.status = true;

    try {
      const typeOfRole = userCredentialsObject.userType === "staff" ? "staff" : "admin";
      const res = await axiosWithToken.post(`http://localhost:4000/admin-api/${typeOfRole}`, userCredentialsObject);

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
    <div className='addusercontainer'>
      <h1 className="heading">Registration Form</h1>
      <form className="form" onSubmit={handleSubmit(onRegisterFormSubmit)}>
        {state && <h3>Registration successful</h3>}
        {err && <p className="error-message">{err}</p>}

        {/* Username */}
        <input
          placeholder='Username'
          className="input"
          type="text"
          {...register("username", { required: true })}
          id="username"
        />
        {errors.username && <p className="error-message">Username is required</p>}

        {/* Name */}
        <input
          className="input"
          placeholder='Name'
          type="text"
          {...register("name", { required: true })}
          id="name"
        />
        {errors.name && <p className="error-message">Name is required</p>}

        {/* Password */}
        <input
          type="password"
          placeholder='Password'
          {...register("password", { required: true })}
          id="password"
          className="input"
        />
        {errors.password && <p className="error-message">Password is required</p>}

        <div className='radio-container'>
          <div className='admin-radio'>
            <p>Admin</p>
            <input
              type="radio"
              value="admin"
              name="userType"
              {...register("userType", { required: true })}
            />
          </div>
          <div className='staff-radio'>
            <p>Staff</p>
            <input
              type="radio"
              value="staff"
              name="userType"
              {...register("userType", { required: true })}
            />
          </div>
        </div>
        {errors.userType && <p className="error-message">User type is required</p>}

        <br />

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default AddUser;
