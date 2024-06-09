import React from 'react';
import { useForm } from 'react-hook-form';
import './DeleteUser.css'

    const DeleteUser=()=>{
      const{register,handleSubmit}=useForm()

      function deleteUser(data) {
        fetch(`http://localhost:4000/users?username=${data.username}`, {
          method: "DELETE"
        })
        .then((res) => {
          if (res.ok) {
            console.log("User deleted successfully");
          } else if (res.status === 404) {
            alert("User not found");
          } else {
            console.error("Failed to delete user");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }

    return (
      <>
              <div className='container'>
            <h1 className="heading">Delete User</h1>

      <form action="" onSubmit={handleSubmit(deleteUser)} className="form" >
          <input type="text" placeholder='Username' {...register("username")} className="input" />
          <input type='submit' value='Delete' className="login-button"/>
      </form>
      </div>
  </>
    );
};

export default DeleteUser;
