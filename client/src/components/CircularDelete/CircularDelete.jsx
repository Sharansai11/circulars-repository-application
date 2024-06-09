import React from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../Search/Search';


const CircularDelete = () => {
    let {state}=useLocation()
    return (
        <>
        
           
            
        <p>Delete Circular</p>    
        <Search/>      
   
        </>
    );
};

export default CircularDelete;
