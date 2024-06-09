import React, { useState } from 'react';
import './AdminHome.css';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
function AdminHome() {
  return (
    <><Header />
      <div className="main">
      <div className="App-body">
          <div className="sidebar">
             <div className="sidebar-item">
              <Link to="delete-circular">ALL circulars</Link>
             </div>
          <div className="sidebar-item">
            <Link to="add-user">Add User</Link>
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
    </div>
      </>
   
    );
}

export default AdminHome;
