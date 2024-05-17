// Form.jsx

import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    ID:'',
    DONORNAME: '',
    INSTITUTIONNAME: '',
    AMOUNTGIVENBYDONOR: '',
    // Add more fields as needed
  });


 const submitIt= (e)=>{
    e.preventDefault();
    // console.log(e)
    axios.post("http://localhost:3000/addchild",{ID:formData.ID,DONORNAME:formData.DONORNAME,INSTITUTIONNAME:formData.INSTITUTIONNAME,AMOUNTGIVENBYDONOR:formData.AMOUNTGIVENBYDONOR})
    .then(res=>{console.log(res)})
 }

  // Function to handle changes in form fields
  const handleChange = (e) => {
    // Update the corresponding field in the formData state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData)
  return (
    <div className="box2">
      <h2>Orphanage Donation Form</h2>
      <form>
      <label>
          ID:
          <input
            type="text"
            name="ID"
            value={formData.ID}
            onChange={handleChange}
          />
        </label>
        <label>
          Donor Name:
          <input
            type="text"
            name="DONORNAME"
            value={formData.DONORNAME}
            onChange={handleChange}
          />
        </label>
        <label>
          Institution Name:
          <input
            type="text"
            name="INSTITUTIONNAME"
            value={formData.INSTITUTIONNAME}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount Given by Donor:
          <input
            type="text"
            name="AMOUNTGIVENBYDONOR"
            value={formData.AMOUNTGIVENBYDONOR}
            onChange={handleChange}
          />
        </label>
        <div className='sub'>
        <Link to ='/' onClick={submitIt}>Submit</Link>

        </div>
        {/* Add more input fields as needed */}
        
      </form>
    </div>
    
  );
};

export default Form;
