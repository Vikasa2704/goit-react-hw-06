import { IoIosContact } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';
import css from './Contact.module.css';

const Contact = ({ number, name }) => {
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
				</li>
	);
};

export default Contact;
