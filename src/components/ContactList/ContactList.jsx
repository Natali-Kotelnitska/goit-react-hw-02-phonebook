import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        <li>{contacts}</li>
      </ul>
    );
  }
}
export default ContactList;
