import css from './Contact.module.css';

const Contact = ({ name, number}) => {
  return (
    <div className={css.contact}>
      <p>{name}: {number}</p>
    </div>
  );
};

export default Contact;
