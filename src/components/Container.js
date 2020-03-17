import React from "react";
import styled from "styled-components";
import withTheme from "../hoc/withTheme";

const Wrapper = styled.div`
margin: 0;
padding: 10px;
color: ${props => props.themeProps.fontColor};
background-color: ${props => props.themeProps.bodybg};
`;

function Container({children, theme}) {

  return (
    <Wrapper themeProps={theme.config[theme.type]}>
      {children}
    </Wrapper>
  )
}


export default withTheme(Container);