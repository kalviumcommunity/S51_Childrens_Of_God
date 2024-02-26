import React from 'react'
import data from '../data.json'

function Dummy() {
    return(
        <>
        <h1>My profile</h1>
        

       {data.map((profile,index)=>(
        <div key={index} className='profile'>
            <div>
            <ul>
        <li>
          <strong>Id - {profile.ID}</strong> 
        </li>
        <li>
          <strong>Institution name - {profile.INSTITUTIONNAME}</strong> 
        </li>
        <li>
          <strong>Donor name - {profile.DONORNAME}</strong> 
        </li>
        <li>
          <strong>Amount given by donor - {profile.AMOUNTGIVENBYDONOR}</strong> 
        </li>
      </ul>

            </div>

        </div>
       ))}
        
        </>
    )

}
export default Dummy;