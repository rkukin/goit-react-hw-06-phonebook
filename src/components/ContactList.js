import React, {Component} from "react";
import styled from "styled-components";
import ContactListItem from "./ContactListItem";
import withTheme from "../hoc/withTheme";
import {connect} from 'react-redux';
import * as phoneBookActions from '../redux/phoneBookActions';

const List = styled.ul`
max-width: 400px;
display: flex;
flex-direction: column;
`;

class ContactList extends Component {

  getFilteredContacts() {
    const { contacts, filter } = this.props;
    if (filter === "")
      return contacts;
    else
      return contacts.filter(contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

  render() {

    const filteredContacts = this.getFilteredContacts();

    return (
      <List>
        {filteredContacts.map(contact => {
          return <ContactListItem key={contact.id} contact={contact} handleDelete={this.props.onDeleteContact}/>
        })}
      </List>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: (id) => dispatch(phoneBookActions.deleteContact(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ContactList));