import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null);
    const [updatedContact, setUpdatedContact] = useState({
      id: '',
      name: '',
      email: '',
      phone: '',
    });
  
    useEffect(() => {
      fetchContacts();
    }, []);
  
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/phonebook`);
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
  
    async function deleteContact(id) {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/phonebook/${id}`
        );
        console.log('Contact deleted:', response.data);
        fetchContacts(); // Refresh the contact list after successful delete
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  
    const handleEditClick = (contact) => {
      setEditingContact(contact);
      setUpdatedContact({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      });
    };
  
    const handleUpdateSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(
          `http://localhost:4000/api/phonebook/${updatedContact.id}`,
          updatedContact
        );
        console.log('Contact updated:', response.data);
        setEditingContact(null);
        fetchContacts(); // Refresh the contact list after successful update
      } catch (error) {
        console.error('Error updating contact:', error);
      }
    };
  
    return (
      <>
        <Navbar />
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
                    <h4 className="card-title">
                      {contact.name}{' '}
                      <ArrowDropDownIcon
                        onClick={() => handleEditClick(contact)}
                      />
                    </h4>
                    {editingContact && editingContact.id === contact.id && (
                      <form onSubmit={handleUpdateSubmit}>
                        <input
                          type="text"
                          value={updatedContact.name}
                          onChange={(e) =>
                            setUpdatedContact({
                              ...updatedContact,
                              name: e.target.value,
                            })
                          }
                        />
                        <input
                          type="email"
                          value={updatedContact.email}
                          onChange={(e) =>
                            setUpdatedContact({
                              ...updatedContact,
                              email: e.target.value,
                            })
                          }
                        />
                        <input
                          type="text"
                          value={updatedContact.phone}
                          onChange={(e) =>
                            setUpdatedContact({
                              ...updatedContact,
                              phone: e.target.value,
                            })
                          }
                        />
                        <button type="submit">Update</button>
                      </form>
                    )}
                    {!editingContact || editingContact.id !== contact.id ? (
                      <ul className="list-group">
                        <li className="bg-light list-group-item">
                          "Email:" {contact.email}
                        </li>
                        <li className="bg-light list-group-item">
                          "Phone: " {contact.phone}
                        </li>
                      </ul>
                    ) : null}
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
    );
  }
// function ContactList(){

//     const [contacts, setContacts] = useState([]);

    
//     useEffect(() => {
//         fetchContacts();
//     }, []);

//     const fetchContacts = async () => {
//         try {
//           const response = await axios.get(`http://localhost:4000/api/phonebook`);
//            setContacts(response.data);
//           console.log(response.data)
//         } catch (error) {
//           console.error('Error fetching contacts:', error);
//         }
//     };
//     // fetchContacts();
  
//     async function deleteContact(id) {
//         try {
//           const response = await axios.delete(`http://localhost:4000/api/phonebook/${id}`);
//           console.log('Contact deleted:', response.data);
//           fetchContacts(); // Refresh the contact list after successful delete
//         } catch (error) {
//           console.error('Error deleting contact:', error);
//         }
//     }
      
//      const state = {
//         showContactInfo: false
//       };

//     return(
//         <>
//             <Navbar/>
//             <div className="container">
//                  <h1 className="display">
//                     <span className="text-prim">Contact </span>
//                     List
//                 </h1>
//                 <div className="row">
//                     {contacts.map((contact) => (
//                     <div className="col-md-4 mb-4" key={contact.id}>
//                         <div className="card">
//                          <div className="card-body">
//                             <h4 className="card-title">{contact.name}
//                                 <ArrowDropDownIcon/>
//                             </h4>
                            
//                                 <ul className="list-group">
//                                     <li className="bg-light list-group-item">
//                                         "Email:" {contact.email}
//                                     </li>
//                                     <li className="bg-light list-group-item">
//                                         "Phone: " {contact.phone}
//                                     </li>
//                                 </ul>
                           
//                             {/* <p className="card-text">{contact.email}</p>
//                             <p className="card-text">{contact.phone}</p> */}
                            
//                             <button
//                                 className="btn btn-danger"
//                                 onClick={() => deleteContact(contact.id)}
//                             >
//                             Delete
//                             </button>
//                           </div>
//                         </div>
//                     </div>
//                     ))}
//                 </div>        
               
//             </div>
//         </>
//     )
// }

export default ContactList;






