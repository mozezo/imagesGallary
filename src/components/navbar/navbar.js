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
                        </NavLinksToggle>
                        <NavLinksToggle>
                            <Link>
                               HER
                            </Link>
                        </NavLinksToggle>
                        <NavLinksToggle>
                            <Link>
                               HIM
                            </Link>
                        </NavLinksToggle>
                        <NavLinksToggle>
                            <Link>
                               the WEDDING
                            </Link>
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
                        </NavLinksToggle>
                        <NavLinksToggle>
                            <Link>
                              Gallary
                            </Link>
                        </NavLinksToggle>
                        <NavLinksToggle>
                            <Link>
                              IDEAS & MORE
                            </Link>
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
  @media (max-width: 768px) {
      display: none;
  }
  }
`;

const NavLinksToggle =styled.li`
  position: relative;
  padding: 12px 7px;
  text-align: center;
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
  @media (max-width: 1200px) {
   font-size: 10px;
  }
  @media (max-width: 991px) {
    font-size: 8.8px !important;
   }
`;