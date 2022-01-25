import React, { Component } from "react";
import ContactItem from "../ContactItem";

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

export default ContactList;
