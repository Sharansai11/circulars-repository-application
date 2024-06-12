import React from 'react';
import './CircularCard.css'; // For global CSS like font import

const CircularCard = ({ data }) => {
    return (
        <div className="Cardcontainer">
            <div className="box">
                <img src="https://images.squarespace-cdn.com/content/v1/519a7bc0e4b08ccdf8f31445/1562331996351-UA4YPY7DF4YQI0RG4QTR/ke17ZwdGBToddI8pDm48kJKo3YTR7zgUvInmXMbZ6zZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0geeCvn1f36QDdcifB7yxGjTk-SMFplgtEhJ5kBshkhu5q5viBDDnY2i_eu2ZnquSA/Comment+r%C3%A9ussir+%C3%A0+concilier+ville+et+nature+%3F" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <p>{data.date}</p>
                    <p>{data.category}</p>
                </div>
            </div>
        </div>
    );
};

export default CircularCard;
