import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteContact, getContacts } from '../../Services/contactService';
import Contact from './Contact/Contact';
import './ContactList.css';

const ContactList = () => {
   const [contacts, setContacts] = useState(null);
   const [allContacts, setAllContacts] = useState(null);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      const fetchContacts = async () => {
         const { data } = await getContacts();
         setContacts(data);
         setAllContacts(data);
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

   const searchHandler = (event) => {
      const searchValue = event.target.value;
      setSearchTerm(searchValue);
      if (searchValue !== '') {
         const filteredContacts = allContacts.filter((contact) =>
            Object.values(contact)
               .join(' ')
               .toLowerCase()
               .includes(searchValue.toLowerCase())
         );
         setContacts(filteredContacts);
      } else {
         setContacts(allContacts);
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
            <div>
               <input
                  type="text"
                  value={searchTerm}
                  onChange={searchHandler}
                  placeholder="Search"
               />
            </div>
            {contacts ? (
               contacts.map((contact) => (
                  <Contact
                     key={contact.id}
                     contact={contact}
                     onDelete={deleteContactHandler}
                  />
               ))
            ) : (
               <p>Loading...</p>
            )}
         </div>
      </section>
   );
};

export default ContactList;
