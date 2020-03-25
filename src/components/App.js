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

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.props.loadContacts(storedContacts);
    }
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
        <Filter/>
        <ContactList />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadContacts: (contacts) => dispatch(phoneBookActions.loadContacts(contacts)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(App));