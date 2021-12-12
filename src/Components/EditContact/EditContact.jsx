import { useEffect, useState } from 'react';
import { getSingleContact, updateContact } from '../../Services/contactService';

const EditContact = ({ editContactHandler, history, match }) => {
   const [contact, setContact] = useState({ name: '', email: '' });

   const changeHandler = (event) => {
      setContact({ ...contact, [event.target.name]: event.target.value });
   };

   const submitForm = async (event) => {
      if (!contact.name || !contact.email) {
         return alert('all fields are mandatory');
      }
      event.preventDefault();
      try {
         await updateContact(match.params.id, contact);
         history.push('/');
      } catch (error) {
         console.log(error);
      }
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
   }, [match.params.id]);

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
         <button type="submit">Update Contact</button>
      </form>
   );
};

export default EditContact;
