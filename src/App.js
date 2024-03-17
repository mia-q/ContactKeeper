//TO DO:
// add ability to edit contacts
// enforce format for contact information?

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import NewContact from './components/NewContact';
import NoContacts from './components/NoContacts';

function App() {
  const [contacts, setContacts] = useState([]);

  function addContact(newContact) {
      setContacts( prevContacts => {
      return [...prevContacts, newContact]
    }); 
  }

  function deleteContact(id) {
    setContacts(prevContacts => {
      return prevContacts.filter((contact, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header className="header"/>
      <div className="main-content"> 
         <NoContacts hasContacts={contacts.length > 0 ? true : false}/>
        <NewContact addContact={addContact}/>
        <div className="contact-list">
        {contacts.map((contact, index) => {
          return (
            <ContactCard
              key={index}
              id = {index}
              imgUrl={contact.imgUrl}
              name={contact.name}
              number={contact.number}
              email={contact.email}
              onDelete={deleteContact}
            />
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
