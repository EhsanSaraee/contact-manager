import { useState } from 'react';
import './App.css';
import AddContact from './Components/AddContact/AddContact';
import ContactList from './Components/ContactList/ContactList';

const App = () => {
   const [contacts, setContacts] = useState([]);

   const addContactHandler = (contact) => {
      const newContact = { id: Math.ceil(Math.random() * 100), ...contact };
      setContacts([...contacts, newContact]);
   };

   const deleteContactHandler = (id) => {
      const filteredContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContacts);
   };

   return (
      <main className="App">
         <h1>Contact Manager</h1>
         <AddContact addContactHandler={addContactHandler} />
         <ContactList contacts={contacts} onDelete={deleteContactHandler} />
      </main>
   );
};

export default App;
