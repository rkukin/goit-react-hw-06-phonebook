import React, {Component} from "react";
import styled from "styled-components";
import withTheme from "../hoc/withTheme";
import {connect} from 'react-redux';
import * as phoneBookActions from '../redux/phoneBookActions';

const FilterInput = styled.input`
max-width: 40%;
margin-top: 10px;
margin-bottom: 30px;
color: ${props => props.themeProps.fontColor};
background-color: ${props => props.themeProps.bodybg};
`;

class Filter extends Component {
  handleChange = e => {
    const {value} = e.target;

    this.props.filterUpdated(value);
  };

  render() {
    return (
      <FilterInput themeProps={this.props.theme.config[this.props.theme.type]} type="text" onChange={this.handleChange}
                   name="filter" autoComplete='off'/>
    )
  }
}

const mapDispatchToProps = {
  filterUpdated: (filter) => phoneBookActions.filterUpdated(filter),
};

export default connect(null, mapDispatchToProps)(withTheme(Filter));