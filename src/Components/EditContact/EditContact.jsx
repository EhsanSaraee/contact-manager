import { useEffect, useState } from 'react';
import { getSingleContact } from '../../Services/contactService';

const EditContact = ({ addContactHandler, history, match }) => {
   const [contact, setContact] = useState({ name: '', email: '' });

   const changeHandler = (event) => {
      setContact({ ...contact, [event.target.name]: event.target.value });
   };

   const submitForm = (event) => {
      if (!contact.name || !contact.email) {
         return alert('all fields are mandatory');
      }
      event.preventDefault();
      addContactHandler(contact);
      setContact({ name: '', email: '' });
      history.push('/');
   };

   useEffect(() => {
      const localFetch = async () => {
         try {
            const { data } = await getSingleContact(match.params.id);
            setContact({ name: data.name, email: data.email });
         } catch (error) {
            console.log(error);
         }
      };
      localFetch();
   }, []);

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
         <button type="submit">Edit Contact</button>
      </form>
   );
};

export default EditContact;
