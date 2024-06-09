import React from 'react';
import './Header.css'
import vnr_log from '../assets/VNRVJIETLogo - Copy.png'
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../redux/slices/StaffAdminSlice';

const Header = () => {
    let { loginUserStatus, currentUser } = useSelector(
        (state) => state.StaffAdminLoginReducer
    );

    let dispatch = useDispatch()
    function logout() {
        localStorage.removeItem("token");
        dispatch(resetState());
    }

    return (
        <div className="header">
            <div className="middle-content">
                <img className='vnr-logo' src={vnr_log} alt="" />
                <h2 className='vnr'>VNR VJIET - Circular Repository</h2></div>
            <div className="header-rightmost-content">
                {loginUserStatus ? <></> : <> {<p>{currentUser}</p>},{<button onClick={logout}>logout</button>}</>}

            </div>
        </div>
    );
};

export default Header;
