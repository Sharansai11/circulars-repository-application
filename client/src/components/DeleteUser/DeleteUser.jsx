import React, { useState1 } from 'react';
import { useForm } from 'react-hook-form';
import './DeleteUser.css'
import { axiosWithToken } from '../../AxiosWithToken';

const DeleteUser = () => {

  const [err1, setErr1] = useState("");
  const [state1, setState1] = useState(false);

  const { register, handleSubmit } = useForm()

  async function deleteUser(userCrdentialsObject) {
    try {

      const res = await axiosWithToken.post(`http://localhost:4000/admin-api/delete-user`, userCrdentialsObject);
      console.log("deltete user ", res);
      if (res.data.message === "User deleted") {
        setState1(true);
        setErr1("");
      } else {
        setErr1(res.data.message);
      }
    } catch (err1or) {
      console.err1or("Err1or during deletion:", err1or);
      setErr1("Failed to delete. Please try again.");
    }

  }

  return (
    <>
      <div className='container'>
        <h1 className="heading">Delete User</h1>

        <form action="" onSubmit={handleSubmit(deleteUser)} className="form" >

          <input type="text" placeholder='Username' {...register("username")} className="input" />

          <button type='submit'>delete</button>
        </form>
      </div>
    </>
  );
};

export default DeleteUser;
