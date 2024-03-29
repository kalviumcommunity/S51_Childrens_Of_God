import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const OrphanageList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const header = new Headers({ "Access-Control-Allow-Origin": "*" });

    const response = await fetch("http://localhost:3000/getallchildren", {
        header : header,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
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
      <Link to="/Form">Add</Link>
      <h2>List of Orphanages</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DONORNAME</th>
            <th>INSTITUTIONNAME</th>
            <th>AMOUNTGIVENBYDONOR</th>
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

  