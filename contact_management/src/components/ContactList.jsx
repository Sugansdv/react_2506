import React from 'react';
import contacts from '../data';

const ContactList = () => {
  return (
    <div className="container mt-4">
      <h2>Contact List</h2>
      <table className="table table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <tr key={i}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
