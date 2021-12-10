import { useState } from 'react';

const AddContact = ({ addContactHandler }) => {
   const [contact, setContact] = useState({ name: '', email: '' });

   const changeHandler = (event) => {
      setContact({ ...contact, [event.target.name]: event.target.value });
   };

   const submitForm = (event) => {
      event.preventDefault();
      addContactHandler(contact);
      setContact({ name: '', email: '' });
   };

   return (
      <form onSubmit={submitForm}>
         <div className="formControl">
            <label htmlFor="name">Name</label>
            <input
               type="text"
               name="name"
               id="name"
               value={contact.name}
               onChange={changeHandler}
            />
         </div>
         <div className="formControl">
            <label htmlFor="email">Email</label>
            <input
               type="email"
               name="email"
               id="email"
               value={contact.email}
               onChange={changeHandler}
            />
         </div>
         <button type="submit">Add Contact</button>
      </form>
   );
};

export default AddContact;
