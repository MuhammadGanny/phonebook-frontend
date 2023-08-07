import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";

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
      


    return(
        <>
            <Navbar/>
            <div className="container">
                 <h1 className="display">
                    <span className="text-prim">Contact </span>
                    List
                </h1>
            </div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact) => (
                <li key={contact.id}>
                    {contact.name} - {contact.email} - {contact.phone}
                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
                ))}
            </ul>
        
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
