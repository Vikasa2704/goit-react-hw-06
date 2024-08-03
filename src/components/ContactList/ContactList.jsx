import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css'
import { selectContacts, selectFilter } from '../../redux/selectors';
const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const filteredData = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
    return (
        <ul className={s.list}>
            {filteredData.map(({ id, name, number }) => (
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    number={number}

                />
            ))}
        </ul>
    );
};

export default ContactList;