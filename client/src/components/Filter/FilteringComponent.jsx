// import React, { useState } from 'react';
// import './FilteringComponent.css';

// const FilteringComponent = ({ data, setData }) => {
//   const [category, setCategory] = useState('');
//   const [date, setDate] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFilter = () => {
//     let filteredData = [...data];

//     if (category) {
//       filteredData = filteredData.filter(item => item.category === category);
//     }

//     if (date) {
//       filteredData = filteredData.filter(item => item.date === date);
//     }

//     if (searchTerm) {
//       filteredData = filteredData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
//     }

//     setData(filteredData);
//   };

//   const handleReset = () => {
//     setCategory('');
//     setDate('');
//     setSearchTerm('');
//     setData(data);
//   };

//   return (
//     <div className="main-container">

//     <div className="filtering-container">
//       <label className="filtering-label">Category:</label>
//       <select className="filtering-select" value={category} onChange={handleCategoryChange}>
//         <option value="">All</option>
//         <option value="category1">Category 1</option>
//         <option value="category2">Category 2</option>
//         <option value="category3">Category 3</option>
//       </select>

//       <label className="filtering-label">Date:</label>
//       <input className="filtering-input" type="date" value={date} onChange={handleDateChange} />

//       <label className="filtering-label">Search:</label>
//       <input className="filtering-input" type="text" value={searchTerm} onChange={handleSearchChange} />

//       <button className="filtering-button" onClick={handleFilter}>Filter</button>
//       <button className="filtering-button" onClick={handleReset}>Reset</button>
//     </div>
//     </div>

//   );
// };

// export default FilteringComponent;
