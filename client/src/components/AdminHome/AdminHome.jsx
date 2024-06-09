import React, { useState } from 'react';
import './AdminHome.css';
import { Link, Outlet } from 'react-router-dom';

function AdminHome() {
    return (
    <div className="main">
      <div className="App-body">
        <div className="sidebar">
          <div className="sidebar-item">
            <Link to="add-user">Add User</Link>
          </div>
          <div className="sidebar-item">
            <Link to="delete-user">Qualification</Link>
          </div>
          <div className="sidebar-item">
            <Link to="upload-circular">Designation</Link>
          </div>
          </div>
        <div className="main-content">
          <Outlet/>
        </div>
      </div>
    </div>
    );
}

export default AdminHome;
