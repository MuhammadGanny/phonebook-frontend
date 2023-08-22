
import Navbar from "./Navbar"
import React, { useState } from 'react';
//import App from '../App';
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/phonebook';

function Add({onAdd}){


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAdd = async () => {
    if (name && email && phone) {
      const newContact = { name, email, phone };

      try {
        // Send POST request to backend API
        const response = await axios.post('https://phonebook-backend-lo11.onrender.com/api/phonebook', newContact);
        if (response.status === 201) {
          // Update state and parent component
          onAdd(response.data);
          setName('');
          setEmail('');
          setPhone('');
        }
      } catch (error) {
        console.error('Error adding contact:', error);
      }
    }
 };



    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="card">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input 
                                    name="name"
                                    placeholder="Enter Name" 
                                    type="text" 
                                    className="form-control form-control-lg"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}>
                                    

                                </input>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input 
                                    name="email" 
                                    placeholder="Enter Email" 
                                    type="email" 
                                    className="form-control form-control-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    >
                                </input>
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input 
                                    name="phone" 
                                    placeholder="Enter Phone" 
                                    type="text" 
                                    className="form-control form-control-lg"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    >

                                </input>
                            </div>
                            <input 
                                type="submit" 
                                className="btn btn-block btn-primary" 
                                value="Add"
                                onClick={handleAdd}
                            ></input>
                        </form>
                    </div>
                </div>
            
            </div>
        </>    
    )

}
export default Add