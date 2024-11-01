// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import { Navigate, useNavigate } from 'react-router-dom'


// function Formget() {
//     const [users,setUsers]=useState([])

    
//     const Navigate=useNavigate()

//     useEffect(()=>{
//         axios.get('http://localhost:1300/api/new/User')
//         .then(Response=>{
//             setUsers(Response.data);
            
//         })
//         .catch(Error=>{
//             console.error('Error fetching user:',Error)
//         })


//     },[])
//     const handleupdate=(id)=>{
//         Navigate(`/updateget/${id}`)
//     }
   

    
//     const handleDelete = async (id) => {
//         try {
//             const response = await axios.delete(`http://localhost:1300/api/new/user/${id}`);
//             console.log('User deleted:', response.data);
//             setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
//             Navigate('/get');
//         } catch (error) {
//             console.error('Error deleting user:', error.response || error);
//         }
//     };
    

    
//     return(
//         <div>
//             <h2>User list</h2>
//             {users.length > 0 ?(
//                 <div className='list'>
//                     {users.map(user=>(
//                         <div key={user._id}>
//                            <ol>
//                            <li> <strong>name:</strong>{user.name}<br/></li>
//                             <li><strong>email:</strong>{user.email}<br/></li>
//                            <li> <strong>age:</strong>{user.age}</li>
//                             </ol>
//                             <button onClick={()=>handleupdate(user._id)}>update</button>
//                           <button onClick={()=>handleDelete(user._id)}>delete</button>
                          
//                           </div>
//                     ))}
                    
//                     </div>
//             ) : (
//                 <p>no Users found.</p>
//             )}
//         </div>
//     )
  
// }

// export default Formget

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import "./Formget.css"

function Formget() {

        const [users,setUsers]=useState([])


const navigate = useNavigate();

useEffect(() => {
    axios.get('http://localhost:1300/api/new/User')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
  const handleUpdate = (id) => {
    navigate(`/updateget/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:1300/api/new/user/${id}`);
      console.log('User deleted:', response.data);
      setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
      navigate('/get');
    } catch (error) {
      console.error('Error deleting user:', error.response || error);
    }
  };
  return (
    <div>
      <h2>User list</h2>
      <div className='get'>
      {users.length > 0 ? (
        <div className='list'>
          {users.map(user => (
            <div key={user._id}>
              
                <p><strong>Name:</strong> {user.name}<br/></p>
                <p><strong>Email:</strong> {user.email}<br/></p>
                <p><strong>Age:</strong> {user.age}</p>
           
              <button onClick={() => handleUpdate(user._id)}>Update</button>
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </div>
          ))}
        </div>
        
      ) : (
        
        <p>No users found.</p>
      )}
    </div>
    </div>

  );
}

export default Formget