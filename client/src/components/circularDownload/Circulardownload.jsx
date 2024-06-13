import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './Circulardownload.css';

const CircularDownload = () => {
    const location = useLocation();
    const { circular } = location.state;
    const { currentUser } = useSelector((state) => state.StaffAdminLoginReducer);
    const token = localStorage.getItem('token');
    const axiosWithToken = axios.create({
        headers: { Authorization: `Bearer ${token}` }
    });
    const { _id, title, description, date, category, fileurl, status } = circular;

    const [deleted, setDeleted] = useState(false);
    const [restored, setRestored] = useState(false);

    const downloadClick = async (fileurl, title) => {
        try {
            const response = await axios({
                url: fileurl,
                method: 'GET',
                responseType: 'blob', // important for handling binary data
            });
            const contentType = response.headers['content-type'];
            const extension = contentType.split('/')[1];
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${title}.${extension}`); // specify a filename with appropriate extension
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link); // remove the link from the DOM
        } catch (error) {
            console.error('Error downloading the file', error);
        }
    };

    const deleteCircular = async (fileurl) => {
        try {
            await axiosWithToken.put('http://localhost:4000/admin-api/delete-circular', {
                fileurl // Send fileurl as data
            });

            setDeleted(true); // Update state after successful soft deletion
        } catch (error) {
            console.error('Error deleting circular', error);
            alert('Failed to delete circular. Please try again later.');
        }
    };

    const restoreCircular = async (fileurl) => {
        try {
            await axiosWithToken.put('http://localhost:4000/admin-api/restore-circular', {
                fileurl // Send fileurl as data
            });

            setRestored(true); // Update state after successful restoration
        } catch (error) {
            console.error('Error restoring circular', error);
            alert('Failed to restore circular. Please try again later.');
        }
    };

    if (deleted) {
        return <div>Circular deleted successfully.</div>;
    }

    if (restored) {
        return <div>Circular restored successfully.</div>;
    }

    return (
        <div className="circular-container">
            <div className="circular-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Category:</strong> {category}</p>
                <button onClick={() => downloadClick(fileurl, title)} className="download-button">
                    Download File
                </button>
                {currentUser.userType === 'admin' && (
                    status ? (
                        <button onClick={() => deleteCircular(fileurl)} className="delete-button">
                            Delete Circular
                        </button>
                    ) : (
                        <button onClick={() => restoreCircular(fileurl)} className="restore-button">
                            Restore Circular
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

export default CircularDownload;
