import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const OrphanageList = () => {
  const [data, setData] = useState([]);
  const getCookie = (name) => {
    const cookieValue = document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith(name + '='));
    if (cookieValue) {
      return cookieValue.split('=')[1];
    }
    return null;
  }

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:3000/getallchildren", {token : getCookie("token")
      });
  
      const result = response.data;
      console.log("res", result);
      setData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deletebtn =(ID)=>{
    axios.delete(`http://localhost:3000/deleteuser/${ID}`)
    .then(res=>{console.log(res)})
    console.log('Deleted Data')
    window.location.reload()

  }

  return (
    <div className='box'>
      <div className='add'>
      <Link to="/Form">Add</Link>
      </div>

      <div className='login'>
      <Link to="/Login">Login</Link>
      </div>
      
     
      <h2>List of Orphanages</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DONORNAME</th>
            <th>INSTITUTIONNAME</th>
            <th>AMOUNTGIVENBYDONOR</th>
            <th>UPDATE</th>
            <th>DELETE</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((orphanage) => (
        
              <tr key={orphanage.ID}>
              <td>{orphanage.ID}</td>
              <td>{orphanage.DONORNAME}</td>
              <td>{orphanage.INSTITUTIONNAME}</td>
              <td>{orphanage.AMOUNTGIVENBYDONOR}</td>
              <td><Link to='/Update'>Update</Link></td>
              <td><button onClick={(e)=>{
                deletebtn(orphanage.ID)
              }}>Delete</button></td>

              
              {/* Add more columns as needed */}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrphanageList;

  