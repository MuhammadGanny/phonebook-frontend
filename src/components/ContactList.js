import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function ContactList(){

    const [contacts, setContacts] = useState([]);

    
    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/api/phonebook`);
           setContacts(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching contacts:', error);
        }
    };
    // fetchContacts();
  
    async function deleteContact(id) {
        try {
          const response = await axios.delete(`http://localhost:4000/api/phonebook/${id}`);
          console.log('Contact deleted:', response.data);
          fetchContacts(); // Refresh the contact list after successful delete
        } catch (error) {
          console.error('Error deleting contact:', error);
        }
    }
      
     const state = {
        showContactInfo: false
      };

    return(
        <>
            <Navbar/>
            <div className="container">
                 <h1 className="display">
                    <span className="text-prim">Contact </span>
                    List
                </h1>
                <div className="row">
                    {contacts.map((contact) => (
                    <div className="col-md-4 mb-4" key={contact.id}>
                        <div className="card">
                         <div className="card-body">
                            <h4 className="card-title">{contact.name}
                                <ArrowDropDownIcon/>
                            </h4>
                            
                                <ul className="list-group">
                                    <li className="bg-light list-group-item">
                                        "Email:" {contact.email}
                                    </li>
                                    <li className="bg-light list-group-item">
                                        "Phone: " {contact.phone}
                                    </li>
                                </ul>
                           
                            {/* <p className="card-text">{contact.email}</p>
                            <p className="card-text">{contact.phone}</p> */}
                            <button
                            className="btn btn-danger"
                            onClick={() => deleteContact(contact.id)}
                            >
                            Delete
                            </button>
                          </div>
                        </div>
                    </div>
                    ))}
                </div>        
               
            </div>
        </>
    )
}

export default ContactList;






// function ContactList({ contacts, onDelete }) {
//   return (
//     <div>
//       <h2>Contact List</h2>
//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             <span>{contact.name}</span>
//             <button onClick={() => onDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ContactList;
