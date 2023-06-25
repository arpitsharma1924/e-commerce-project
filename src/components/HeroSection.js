import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {Button} from '../styles/Button'
const HeroSection = ({mydata}) => {
    const {name} = mydata
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h2> {name} </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink to="/products">
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 4.5rem 10rem;
margin-top:25px;

img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {
  p {
    margin: 2rem 0;
  }

  h2 {
    text-transform: capitalize;
    font-weight: bold;
    font-family: cursive;
  }

  .intro-data {
    margin-bottom: 0;
    color: #e40046;
  }
}

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: #e40046;
    position: absolute;
    left: 49%;
    top: -3.5rem;
    z-index: -1;
    border-radius: 50px;
border-bottom-left-radius: 0;
border-top-right-radius: 0;
  }
}
.img-style {
  width: 100%;
  height: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {

padding: 4.5rem 0rem;

  .grid {
    gap: 10rem;
  }

  figure::after {
    content: "";
    width: 60%;
    height: 80%;
    left: 50%;
    background-color: #e40046;
    z-index: -1;
  }
}
`
export default HeroSection