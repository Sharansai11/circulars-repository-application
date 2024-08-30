import React, { useState } from 'react';
import './AdminHome.css';
import { Link, Outlet } from 'react-router-dom';
function AdminHome() {
  return (
   
      <div className="main">
      
        <div className="sidebar">
          <div className="sidebar-item">
            <Link to="add-user">Add User</Link>
          </div>
          <div className="sidebar-item">
           
          <Link to="circular">ALL circulars</Link>
             </div>
          
          <div className="sidebar-item">
            <Link to="delete-user">delete User</Link>
          </div>
          <div className="sidebar-item">
            <Link to="upload-circular">upload circular</Link>
            </div>
            
          </div>
        <div className="main-content">
          <Outlet/>
        </div>
     
    </div>
    
   
    );
}

export default AdminHome;
