import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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

   useEffect(() => {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));
      savedContacts && setContacts(savedContacts);
   }, []);

   useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);

   return (
      <main className="App">
         <h1>Contact Manager</h1>
         <Switch>
            <Route
               path="/add-contact"
               render={(props) => (
                  <AddContact
                     addContactHandler={addContactHandler}
                     {...props}
                  />
               )}
            />
            <Route
               path="/"
               exact
               render={(props) => (
                  <ContactList
                     contacts={contacts}
                     onDelete={deleteContactHandler}
                     {...props}
                  />
               )}
            />
         </Switch>
      </main>
   );
};

export default App;
