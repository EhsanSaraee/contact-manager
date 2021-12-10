import { useState } from 'react';
import './App.css';
import AddContact from './Components/AddContact/AddContact';

const App = () => {
   const [contacts, setContacts] = useState([]);

   const addContactHandler = (event) => {
      event.preventDefault();
      setContacts(contacts + 1);
   };

   return (
      <main className="App">
         <h1>Contact Manager</h1>
         <AddContact onSubmit={addContactHandler} />
         <section>Contact List</section>
      </main>
   );
};

export default App;
