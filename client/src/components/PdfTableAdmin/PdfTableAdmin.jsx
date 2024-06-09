import React from 'react'

function PdfTableAdmin() {
  return (
    <div>PdfTableAdmin</div>
  )
}

export default PdfTableAdmin
// import React, { useState } from 'react';
// import './PdfTableAdmin.css'
// import delete_icon from '../assets/delete_icon.png'

// const PdfTableAdmin = () => {

//   let handlePdfView=(item)=>{
//     console.log('view',item)
//   }

//   const handleDelete=(event,item)=>{
//     event.stopPropagation(); // Stop event propagation
//     console.log('delete',item)
  
//   }
//   return (
      
//       <div className="data-table-container"  style={{ overflowY: 'scroll', maxHeight: 'calc(100vh - 90px)' }}> 
//       {data.length === 0 ? (
//         <p>No records found</p>
//       ) : (
//       <table className="data-table"> 
//         <thead>
//           <tr className='head-row'>
//             <th>No</th>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Date</th>
//             <th></th>

//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr className='row-hover' key={index}  onClick={()=>{handlePdfView(item)}}>
//               <td>{index+1}</td>
//               <td>{item.name}</td>
//               <td>{item.category}</td>
//               <td>{item.date}</td>
//               <td>  <img className='delete-icon' src={delete_icon} onClick={(event)=>handleDelete(event,item)}  alt="" /></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       )}
      
      
      
//     </div>
    
//     );
// };

// export default PdfTableAdmin;
