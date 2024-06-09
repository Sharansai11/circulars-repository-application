import React, { useState } from 'react';
import './AdminHome.css';
import { NavLink, Outlet } from 'react-router-dom';

function AdminHome() {
    const [showUserOptions, setShowUserOptions] = useState(false);
    const history = useHistory();

    const toggleUserOptions = () => {
        setShowUserOptions(!showUserOptions);
    };

    const handleDeleteCircular = () => {
        // Perform any necessary delete action
        // After deleting, redirect to the same page

    };

    return (
        <div className="admin-home">
            <div className="admin-options">
                <ul>
                    <li onClick={toggleUserOptions}>Manage User</li >
                    {showUserOptions && (
                        <>
                            <NavLink to="add-user">Register New User</NavLink >
                            <NavLink to="delete-user">Delete Existing User</NavLink >
                        </>
                    )}
                    <NavLink to="upload-circular">Upload Circular</NavLink >
                    <li onClick={handleDeleteCircular}>Delete Circular</li >
                </ul>
            </div>
            <div className="options-contents">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminHome;
