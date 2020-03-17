import React, {Component} from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import withTheme from "../hoc/withTheme"

const ContactsForm = styled.form`
border: 2px solid ${props => props.themeProps.fontColor};
max-width: 400px;
padding: 10px;
display: flex;
flex-direction: column;
background-color: ${props => props.themeProps.bodybg};
`;

const InputLabel = styled.label`
max-width: 40%;
font-size: 20px;
color: ${props => props.themeProps.fontColor}
`;

const FormInput = styled.input`
max-width: 40%;
margin-top: 10px;
margin-bottom: 30px;
color: ${props => props.themeProps.fontColor};
background-color: ${props => props.themeProps.bodybg};
`;

const SubmitButton = styled.button`
max-width: 30%;
border-radius: 5px;
color: ${props => props.themeProps.fontColor};
background-color: ${props => props.themeProps.bodybg};
`;

class AddContactForm extends Component {

  state = {
    name: '',
    number: ''
  };

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({name: '', number: ''});
  };

  render() {

    // const {config} = this.props.theme;
    const config = this.props.theme.config[this.props.theme.type];

    return (

      <>

        <ContactsForm themeProps={config} onSubmit={this.handleSubmit}>
          <InputLabel themeProps={config} htmlFor="name">Name</InputLabel>
          <FormInput themeProps={config} type="text" name="name" id="name" value={this.state.name} autoComplete='off'
                     onChange={this.handleChange}/>

          <InputLabel themeProps={config} htmlFor="number">Number</InputLabel>
          <FormInput themeProps={config} type="tel" name="number" id="number" value={this.state.number}
                     autoComplete='off'
                     onChange={this.handleChange}/>

          <SubmitButton themeProps={config} type="submit">Add contact</SubmitButton>
        </ContactsForm>
      </>
    )
  }
};

AddContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired
};

export default withTheme(AddContactForm)