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
         <div>
            <Link to={`/edit/${id}`}>
               <button className="editBtn">Edit</button>
            </Link>
            <button onClick={() => onDelete(id)}>Delete</button>
         </div>
      </div>
   );
};

export default Contact;
