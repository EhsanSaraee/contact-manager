import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteContact, getContacts } from '../../Services/contactService';
import Contact from './Contact/Contact';
import './ContactList.css';

const ContactList = () => {
   const [contacts, setContacts] = useState([]);

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

   return (
      <section className="listWrapper">
         <div className="contactList">
            <div className="listHeader">
               <h2>Contacts</h2>
               <Link to="/add-contact">
                  <button>Add</button>
               </Link>
            </div>
            {contacts.map((contact) => (
               <Contact
                  key={contact.id}
                  contact={contact}
                  onDelete={deleteContactHandler}
               />
            ))}
         </div>
      </section>
   );
};

export default ContactList;
