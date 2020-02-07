import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logo.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" />
  )
}

export default Brand

const Image = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 10%;
  text-align: center;

  @media (max-width: 767px){
    max-height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    margin: auto;
  }
`;