
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './DeleteUser.css'
import axios from 'axios';

const DeleteUser = () => {
  const token = localStorage.getItem('token')
  const axiosWithToken = axios.create({
    headers: { Authorization: `Bearer ${token}` }
  })

  const [err, setErr] = useState("");
  const [state, setState] = useState(false);

  const { register, handleSubmit } = useForm()

  async function deleteUser(userCrdentialsObject) {
    try {
      const res = await axiosWithToken.put(`http://localhost:4000/admin-api/delete-user`, userCrdentialsObject);
      console.log("deleted user", res);
      if (res.data.message === "User deleted") {
        setState(true);
        setErr("");
      } else {
        setErr(res.data.message);
      }
    } catch (err) {
      console.log("Err1or during deletion:", err);
      setErr("Failed to delete. Please try again.");
    }

  }

  return (
    <>
      <div className='container'>
        <h1 className="heading">Delete User</h1>
        {state ? <p>user deleted </p> : <p>{err}</p>}
        <form action="" onSubmit={handleSubmit(deleteUser)} className="form" >

          <input type="text" id="username" placeholder='Username' {...register("username")} className="input" />

          <button type='submit'>delete</button>
        </form>
      </div>
    </>
  );
};

export default DeleteUser;
