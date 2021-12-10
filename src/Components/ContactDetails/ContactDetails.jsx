import { Link } from 'react-router-dom';

const ContactDetails = ({ location }) => {
   const { contact } = location.state;
   return (
      <>
         <p>user name is : {contact.name}</p>
         <p>user email is : {contact.email}</p>
         <Link to="/">go to contact list</Link>
      </>
   );
};

export default ContactDetails;
