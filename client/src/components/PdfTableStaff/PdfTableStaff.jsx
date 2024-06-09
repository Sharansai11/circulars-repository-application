import React, { useState } from 'react';
import './PdfTableStaff.css'
import delete_icon from '../assets/delete_icon.png'
import download from '../assets/download.png'

const PdfTable = ({data}) => {

  let handlePdfView=(item)=>{
    console.log('view',item)
  }

  let handleDownload=(event, item)=>{
    event.stopPropagation(); // Stop event propagation
    console.log('download',item)
  }

    return (
      <div className="data-table-container" style={{ overflowY: 'scroll', maxHeight: 'calc(100vh - 90px)' }}>
        {data.length === 0 ? (
          <p>No records found</p>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Category</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr className='row-hover' key={index} onClick={()=>handlePdfView(item)}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td><img onClick={(event)=>handleDownload(event, item)} className='download-icon' src={download} alt="" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
};

export default PdfTable;
