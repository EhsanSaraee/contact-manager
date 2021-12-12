import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddContact from './Components/AddContact/AddContact';
import ContactDetails from './Components/ContactDetails/ContactDetails';
import ContactList from './Components/ContactList/ContactList';
import EditContact from './Components/EditContact/EditContact';
import {
   addContact,
   deleteContact,
   getContacts,
} from './Services/contactService';

const App = () => {
   const [contacts, setContacts] = useState([]);

   const addContactHandler = async (contact) => {
      try {
         const { data } = await addContact(contact);
         setContacts([...contacts, data]);
      } catch (error) {
         console.log(error);
      }
   };

   const deleteContactHandler = async (id) => {
      try {
         await deleteContact(id);
         const filteredContacts = contacts.filter(
            (contact) => contact.id !== id
         );
         setContacts(filteredContacts);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      const fetchContacts = async () => {
         const { data } = await getContacts();
         setContacts(data);
      };
      try {
         fetchContacts();
      } catch (error) {
         console.log(error);
      }
   }, []);

   return (
      <main className="App">
         <h1>Contact Manager</h1>
         <Switch>
            <Route path="/edit/:id" component={EditContact} />
            <Route path="/user/:id" component={ContactDetails} />
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
