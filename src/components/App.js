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

  onAddValidContact = (name, number) => {

    if (name === "" || number === "") {
      return alert("Please fill all fields!");
    }

    if (this.props.contacts.find(element => (element.name.toLowerCase() === name.toLowerCase()))) {
      return alert("This contact already added!")
    }

    this.props.onAddContact(name, number);
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
        <AddContactForm onAddContact={this.onAddValidContact} />
        <h3>Contacts</h3>
        <Filter handleChange={this.handleChange} />
        <ContactList contacts={this.getFilteredContacts()} handleDelete={this.props.onDeleteContact} />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { contacts, filter } = state.contacts;
  return {
    contacts: contacts,
    filter: filter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: (name, number) => dispatch(phoneBookActions.addContact(name, number)),
    onDeleteContact: (id) => dispatch(phoneBookActions.deleteContact(id)),
    filterUpdated: (filter) => dispatch(phoneBookActions.filterUpdated(filter)),
    loadContacts: (contacts) => dispatch(phoneBookActions.loadContacts(contacts)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(App));