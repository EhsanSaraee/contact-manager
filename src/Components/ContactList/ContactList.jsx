import { Link } from 'react-router-dom';
import './ContactList.css';

const ContactList = ({ contacts, onDelete }) => {
   return (
      <section className="contactList">
         <div>
            <h2>Contacts</h2>
            <Link to="/add-contact">
               <button>Add</button>
            </Link>
         </div>
         {contacts.map(({ id, name, email }) => (
            <div key={id} className="item">
               <p>{name}</p>
               <p>{email}</p>
               <button onClick={() => onDelete(id)}>Delete</button>
            </div>
         ))}
      </section>
   );
};

export default ContactList;
