import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";
import ContactListItem from "./ContactListItem";
import withTheme from "../hoc/withTheme"

const List = styled.ul`
max-width: 400px;
display: flex;
flex-direction: column;
`;

function ContactList({contacts, handleDelete}) {

  return (
    <List>
      {contacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} handleDelete={handleDelete}/>
      })}
    </List>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default withTheme(ContactList)