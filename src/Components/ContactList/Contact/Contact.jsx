import { Link } from 'react-router-dom';

const Contact = ({ contact, onDelete }) => {
   const { id, name, email } = contact;
   return (
      <div className="item">
         <Link to={{ pathname: `/user/${id}`, state: { contact } }}>
            <div>
               <p>Name : {name}</p>
               <p>Email : {email}</p>
            </div>
         </Link>
         <button onClick={() => onDelete(id)}>Delete</button>
      </div>
   );
};

export default Contact;
