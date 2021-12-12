import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddContact from './Components/AddContact/AddContact';
import ContactDetails from './Components/ContactDetails/ContactDetails';
import ContactList from './Components/ContactList/ContactList';
import EditContact from './Components/EditContact/EditContact';

const App = () => {
   return (
      <main className="App">
         <h1>Contact Manager</h1>
         <Switch>
            <Route path="/edit/:id" component={EditContact} />
            <Route path="/user/:id" component={ContactDetails} />
            <Route path="/add-contact" component={AddContact} />
            <Route path="/" exact component={ContactList} />
         </Switch>
      </main>
   );
};

export default App;
