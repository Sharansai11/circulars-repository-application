import React ,{useState}from 'react';
import './UserManage.css'
import AddUser from '../AddUser/AddUser';
import DeleteUser from '../DeleteUser/DeleteUser';


const UserManage = (tShowAdd) => {
    const[showAdd,setShowAdd]=useState(false)
    const[showDelete,setShowDelete]=useState(false)

    setShowAdd()
    
    return (
        <>
       
        <div>
        </div>        
        </>
    );
};

export default UserManage;
