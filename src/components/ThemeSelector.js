import React from "react";
import styled from "styled-components";
import "react-toggle/style.css";
import Toggle from 'react-toggle';
import withTheme from "../hoc/withTheme";

const ToggleLabel = styled.span`
margin: 10px;
`;

function ThemeSelector(themeProps) {

  return (
    <label>
      <ToggleLabel>{themeProps.theme.type}</ToggleLabel>
      <Toggle
        type="checkbox"
        checked={themeProps.theme.type === "dark"}
        onChange={() => themeProps.theme.toggleTheme()}
      />
    </label>

  );
}

export default withTheme(ThemeSelector)