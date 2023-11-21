import React from "react";
import { useState, useEffect } from "react";

export default function SelectedContact({selectedContactId ,setSelectedContactId}){
    const [contact, setContact] = useState({});
    console.log(setSelectedContactId);
     useEffect(() => {
        async function fetchContact() {
          try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const userData = await response.json();
            setContact(userData);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact()
      }, []);
      
        return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Single Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            <tr key={contact.id} >
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            </tr>
          </tbody>
          <button onClick= {() => {
            setSelectedContactId(null);
          }}>Go Back</button>
        </table>
    );
}