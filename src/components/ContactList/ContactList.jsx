import Contact from './../Contact/Contact';
import css from './ContactList.module.css';

import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredData = contacts.filter(item =>
    item.username && typeof item.username === 'string' && item.username.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredData.map(({ id, number, username }) => (
        <li className={css.contacts_item} key={id}>
          <Contact name={username} number={number} id={id} />
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
