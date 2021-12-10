import { Link } from 'react-router-dom';
import Contact from './Contact/Contact';
import './ContactList.css';

const ContactList = ({ contacts, onDelete }) => {
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
                  onDelete={onDelete}
               />
            ))}
         </div>
      </section>
   );
};

export default ContactList;
