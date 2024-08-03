import { IoIosContact } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';

const Contact = ({ id, number, name }) => {
	const dispatch = useDispatch();
	return (
		<li className={css.contactItem}>
			<div>
				<div className={css.contactContext}>
					<IoIosContact />
					<span>{name}</span>
				</div>
				<div className={css.contactContext}>
					<MdPhoneInTalk />
					<a href={`tel: ` + number}>{number}</a>
				</div>
			</div>
			<button className={css.btn} onClick={() => dispatch(deleteContacts(id))}>Delete</button>
		</li>
	);
};

export default Contact;