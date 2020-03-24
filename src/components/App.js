import React, { Component } from "react";
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import ThemeSelector from "./ThemeSelector";
import Container from "./Container";
import withTheme from "../hoc/withTheme";
import { connect } from 'react-redux';
import * as phoneBookActions from '../redux/phoneBookActions';

class App extends Component {

  getFilteredContacts() {
    const { contacts, filter } = this.props;
    if (filter === "")
      return contacts;
    else
      return contacts.filter(contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.props.loadContacts(storedContacts);
    }
  };

  handleChange = e => {
    const { value } = e.target;

    this.props.filterUpdated(value);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.props.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
  };

  render() {
    return (

      <Container>
        <ThemeSelector />
        <h2>PhoneBook</h2>
        <AddContactForm/>
        <h3>Contacts</h3>
        <Filter handleChange={this.handleChange} />
        <ContactList contacts={this.getFilteredContacts()} handleDelete={this.props.onDeleteContact} />
      </Container>
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
    filterUpdated: (filter) => dispatch(phoneBookActions.filterUpdated(filter)),
    loadContacts: (contacts) => dispatch(phoneBookActions.loadContacts(contacts)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(App));