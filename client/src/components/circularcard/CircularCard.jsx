import React from 'react';
import './CircularCard.css'; // For global CSS like font import

const CircularCard = ({ data, onClick }) => {
    const truncateDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 100) {
            return( words.slice(0, 100).join(' ') + "read more...");
        }
        return description;
    };

    return (
        <div className="Cardcontainer" onClick={onClick}>
            <div className="box">
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{truncateDescription(data.description)}</p>
                    <p><strong>Date:</strong> {data.date}</p>
                    <p><strong>Category:</strong> {data.category}</p>
                </div>
            </div>
        </div>
    );
};

export default CircularCard;
