import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';
import Contact from './../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts =  contacts && filter
  ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  : contacts;

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.contacts_item} key={contact.id}>
          <Contact data= {contact} />
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
