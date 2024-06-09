import React ,{useState}from 'react';
import { useLocation } from 'react-router-dom';
import './CircularUpload.css'


const CircularUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const[category,setCategory]=useState('')
    const[name,setName]=useState('')
    const [date, setDate] = useState(new Date());


    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleSelect=(e)=>{
        setCategory(e.target.value)

    }

    const handleName=(e)=>{
        setName(e.target.value)

    }

    const handleDate=(e)=>{
        setDate(e.target.value)
        console.log(e.target.value)

    }


    const handleUpload = () => {
      if (!selectedFile ) {
        alert("No File Selected")
      }
       else if(!name) {
        alert('Enter File Name')
      } 
      else if(category ===''){
        alert('Select Category')
      }
      else {
        alert('Uploading file:', selectedFile);
        console.log(date)
      }
    };
    return (
        
        <div className="container"> {/* Apply className */}
        <h2 className="heading"> Upload Circular</h2>
        <form action="" className='form2'>
        <input className="input2" type="text"  placeholder='File Name'  required onChange={handleName}/>
        <select className="select" id=""  required onChange={handleSelect} >
             <option value="">None</option>
            <option value="sports">Sports</option>
            <option value="exams">Exams</option>
            <option value="events">Events</option>

        </select>

        <input className="input3" type="file" accept=".pdf" onChange={handleFileChange} />
        <input type="date" className="filtering-input" onChange={handleDate} />
        <input type='submit' value='Upload' className="login-button2" onClick={handleUpload}/>
        </form>
      </div>
    );
};

export default CircularUpload;
