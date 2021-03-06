import React, { Component } from "react";
import ContactItem from "../ContactItem";
import propTypes from "prop-types";

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem contactItem={{ name, number, id }}></ContactItem>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: propTypes.array,
  onDeleteContact: propTypes.func,
};

export default ContactList;
