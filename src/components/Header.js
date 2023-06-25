import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
import { FaShopify } from 'react-icons/fa'

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/" >
            {/* <img className='logo' src='./images/e-logo.png' alt='my logo img' /> */}
            <FaShopify className='logo'/><span className='logo'>e'Store</span>
        </NavLink>
        <Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 8.125rem;
width: 100%;
/* background-color: ${({theme})=> theme.colors.bg}; */
background-color: #e40046;
box-shadow: 0 0 4px rgba(0,0,0,0.2);
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
/* backface-visibility: hidden; */

.logo{
    font-size: 3.5rem;
    color: white;
    float: right;
}
@media (max-width:${({theme})=>theme.media.mobile}) { 
} 
`
export default Header