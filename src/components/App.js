import React, { Component } from "react";
import { uuid } from 'uuidv4';
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
      this.setState({
        contacts: JSON.parse(storedContacts)
      });
    }
  };

  handleChange = e => {
    const { value } = e.target;

    this.props.filterUpdated(value);
  };

  // onAddContact = (name, number) => {
  //   const contact = {
  //     id: uuid(),
  //     name: name,
  //     number: number
  //   };
  //
  //   if (name === "" || number === "") {
  //     return alert("Please fill all fields!");
  //   }
  //
  //   if (this.state.contacts.find(element => (element.name.toLowerCase() === name.toLowerCase()))) {
  //     return alert("This contact already added!")
  //   }
  //
  //   this.setState(prevState => {
  //     return {
  //       contacts: [...prevState.contacts, contact]
  //     }
  //   })
  // };

  // handleDelete = (contactId) => {
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter(contact => contact.id !== contactId);
  //   this.setState({ contacts: newContacts });
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.props.contacts)
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  // };

  render() {
    return (

      <Container>
        <ThemeSelector />
        <h2>PhoneBook</h2>
        <AddContactForm onAddContact={this.props.onAddContact} />
        <h3>Contacts</h3>
        <Filter handleChange={this.handleChange} />
        <ContactList contacts={this.getFilteredContacts()} handleDelete={this.props.onDeleteContact} />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts,
    filter: state.contacts.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: (name, number) => dispatch(phoneBookActions.addContact(name, number)),
    onDeleteContact: (id) => dispatch(phoneBookActions.deleteContact(id)),
    filterUpdated: (filter) => dispatch(phoneBookActions.filterUpdated(filter)),
  }
};

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(App));