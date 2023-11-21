import React from "react";

export default function ContactRow( setSelectedContactId, contact ) {
    return(
        <tr key={contact.id} onClick= {() => {
            setSelectedContactId(contact.id);
          }}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    )
}