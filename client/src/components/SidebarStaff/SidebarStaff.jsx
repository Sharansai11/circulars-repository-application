import React ,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import LatestUpdates from '../LatestUpdates/LatestUpdates';
import './SidebarStaff.css'
import SearchStaff from '../SearchStaff/SearchStaff';


const SidebarStaff = ({state}) => {

    const [showSearch, setShowSearch] = useState(false);
    const [showLatest, setShowLatest] = useState(true);
    return (
        <>
    
            <div className="sidebar-container">
            <div className='side-buttons'>
            <p className="cta" onClick={() => { setShowSearch(true); setShowLatest(false); }}>
            <span class="hover-underline-animation2">  Search </span>
         </p>
      <p className="cta" onClick={() => { setShowLatest(true); setShowSearch(false); }}>
         <span class="hover-underline-animation2">  Latest </span>
           </p>
           <div className="sider-bottom">
            <p className='side-state' >Name : {state.name}</p>
            <p className='side-state' >Role : {state.role}</p>
          </div>
        <div className="side-render" >
        {showSearch && <SearchStaff />}
      {showLatest && <LatestUpdates />} 
      </div>
            </div>
            </div>
        </>
    );
};

export default SidebarStaff;
