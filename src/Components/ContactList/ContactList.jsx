const ContactList = ({ contacts, onDelete }) => {
   return (
      <>
         {contacts.map(({ id, name, email }) => (
            <div key={id}>
               <p>{name}</p>
               <p>{email}</p>
               <button onClick={() => onDelete(id)}>Delete</button>
            </div>
         ))}
      </>
   );
};

export default ContactList;
