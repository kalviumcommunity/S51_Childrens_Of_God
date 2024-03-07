// Form.jsx

import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Update = () => {
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
    axios.patch(`http://localhost:3000/updateuser/${formData.ID}`,{ID:formData.ID,DONORNAME:formData.DONORNAME,INSTITUTIONNAME:formData.INSTITUTIONNAME,AMOUNTGIVENBYDONOR:formData.AMOUNTGIVENBYDONOR})
    .then(res=>{console.log(res)})
    console.log('Updated data',formData)
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
      <h2>UPDATE USER FORM</h2>
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
        {/* Add more input fields as needed */}
        <Link to ='/' onClick={submitIt}>Submit</Link>
      </form>
    </div>
    
  );
};

export default Update;
