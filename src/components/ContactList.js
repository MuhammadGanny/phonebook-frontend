import React, { useState } from 'react';
import Navbar from "./Navbar";

function ContactList(){
    return(
        <>
            <Navbar/>
            <div className="container">
                 <h1 className="display">
                    <span className="text-prim">Contact </span>
                    List
                </h1>
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
