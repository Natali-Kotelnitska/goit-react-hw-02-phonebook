import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul className={s.contactsList}>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            name={name}
            number={number}
            key={id}
            id={id}
            onDelete={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
