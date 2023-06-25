import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigation = ({title}) => {
    // console.log(title)
  return (
    <Wrapper>
        <NavLink to={"/"} >Home</NavLink>/ {title}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  padding-left: 3rem;
  /* border-top: .1rem gray solid; */
  a {
    font-size: 2rem;
  }
`;

export default PageNavigation