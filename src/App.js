//TO DO:
//fix placeholder image
//styling

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import NewContact from './components/NewContact';

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
      <NewContact addContact={addContact}/>
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
  );
}

export default App;
