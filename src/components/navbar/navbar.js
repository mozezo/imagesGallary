import React from 'react'
import styled from "styled-components";
import Brand from "./brand";


const Navbar = (props) => {
    

    return (
        <>
            <NavBar>
                <LinksLeft>
                    <NavLinks>
                        <NavLinksToggle>
                            <Link>
                               360 PLANNER
                            </Link>
                            <NavLinksDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> More </LinkDropdown>
                            </NavLinksDropdown>
                        </NavLinksToggle>
                        <NavLinksToggle>
                            <Link>
                               HER
                            </Link>
                            <NavLinksDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> More </LinkDropdown>
                            </NavLinksDropdown>
                        </NavLinksToggle>
                        <NavLinksToggle>
                            <Link>
                               HIM
                            </Link>
                            <NavLinksDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> More </LinkDropdown>
                            </NavLinksDropdown>
                        </NavLinksToggle>
                        <NavLinksToggle>
                            <Link>
                               the WEDDING
                            </Link>
                            <NavLinksDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> More </LinkDropdown>
                            </NavLinksDropdown>
                        </NavLinksToggle>
                    </NavLinks>
                </LinksLeft>
                <Brand />
                <LinksRight>
                <NavLinks>
                        <NavLinksToggle>
                            <Link>
                              VENDORS
                            </Link>
                            <NavLinksDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> More </LinkDropdown>
                            </NavLinksDropdown>
                        </NavLinksToggle>
                        <NavLinksToggle>
                            <Link>
                              Gallary
                            </Link>
                            <NavLinksDropdown>
                                <LinkDropdown> Wedding Ideas </LinkDropdown>
                                <LinkDropdown> More </LinkDropdown>
                            </NavLinksDropdown>
                        </NavLinksToggle>
                        <NavLinksToggle>
                            <Link>
                              IDEAS & MORE
                            </Link>
                            <NavLinksDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> Check list </LinkDropdown>
                                <LinkDropdown> More </LinkDropdown>
                            </NavLinksDropdown>
                        </NavLinksToggle>
                    </NavLinks>
                </LinksRight>

            </NavBar>
        </>
    )
}

export default Navbar

const NavBar = styled.nav`
  transition: all ease 0.1s;
  position: absolute;
  width: 92%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  top: 70px;
  left: 0;
  right: 0;
  margin: auto;
  color: #000;
`;

const LinksLeft = styled.div`
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
  position: relative;
  padding: 0 15px;
  width: 43%;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  @media (max-width: 768px) {
    display: none;
}
`;

const LinksRight = styled.div`
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
  padding: 0 5px;
  width: 43%;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  @media (max-width: 768px) {
    display: none;
}
`;
const NavLinks = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  color: #000000; 
`;

const NavLinksToggle =styled.li`
  position: relative;
  padding: 12px 7px;
  text-align: center;
  &:hover {
    color: #000;
    >div {
        cursor: pointer;
        visibility: visible;
    }
  }
  @media (max-width: 991px){
    padding: 11px 3px;
  }
`;

const Link = styled.a`
  color: #000;
  padding: 12px 7px;
  text-transform: uppercase;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #000;
  }
  @media (max-width: 1200px) {
   font-size: 10px;
  }
  @media (max-width: 991px) {
    font-size: 8.8px !important;
   }
`;

const NavLinksDropdown = styled.div`
    background-color: white;
    visibility: hidden;
    min-width: 100% !important;
    top: 45px;
    left: 0;
    z-index: 9999;
    position: absolute;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    &:hover {
        cursor: pointer;
        visibility: visible;
    }
`;

const LinkDropdown = styled.a`
    color: #000;
    border-top: solid 1px #000;
    text-transform: uppercase;
    display: block;
    text-align: center;
    font-size: 13.6px;
    padding: 10px 15px;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`;