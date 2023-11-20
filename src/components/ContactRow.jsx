import React from "react";

export default function ContactRow(Contact) {
    return(
        <tr>
            <td>{Contact.name}</td>
            <td>{Contact.email}</td>
            <td>{Contact.phone}</td>
        </tr>
    )
}