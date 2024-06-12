import React from 'react'
import { Outlet } from 'react-router-dom'
function StaffHome() {
  return (
   
    <div className="staffhome">
      <Outlet/>
     </div>
    
  )
}

export default StaffHome
// import React,{useState} from 'react';
// import { useLocation,useNavigate } from 'react-router-dom';
// import LatestUpdates from '../LatestUpdates/LatestUpdates';
// import Search from '../Search/Search';
// import Header from '../Header/Header';
// import stafflogo from '../assets/Teacherlogo.png'
// import './StaffHome.css'
// import SidebarStaff from '../SidebarStaff/SidebarStaff';
// const StaffHome = () => {

//     const [showSearch, setShowSearch] = useState(false);
//     const [showUpload, setShowUpload] = useState(false);
//     let {state}=useLocation()
    


   
//       return(
//         <div>
//           <Header/>
//          <SidebarStaff state={state}/>
//         </div>
//       )
//     };

// export default StaffHome;
