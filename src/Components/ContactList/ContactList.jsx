const ContactList = ({ contacts }) => {
   return (
      <ul>
         {contacts.map((contact) => (
            <li key={contact.id}>
               <p>{contact.name}</p>
               <p>{contact.email}</p>
            </li>
         ))}
      </ul>
   );
};

export default ContactList;
