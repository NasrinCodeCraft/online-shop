import React, { useState } from 'react'
import styled from"styled-components";
import LogoImg from "../utils/images/Logo.png"
import { NavLink } from 'react-router-dom';
import Button from "./Button";
import {FavoriteBorder, MenuRounded, SearchRounded, ShoppingCartOutlined} from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;
const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;
const Logo = styled.img`
  height: 34px;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease; 
  &:hover {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline; // Optional: Show underline on hover for clarity
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;


const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 28px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;


const MobileMenu = styled(({ isOpen, ...props }) => <ul {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 80%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;


const Navbar = ({openAuth, setOpenAuth}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
        <NavbarContainer>
            <MobileIcon  onClick={() => setIsOpen(!isOpen)}>
                {/* hamburger Menu */}
                <MenuRounded style={{color: "inherit"}}/>
            </MobileIcon>
            <NavLogo>
                <Logo src={LogoImg}/>
            </NavLogo>
            <NavItems>
                <NavLink to="/">Home</NavLink>
                <NavLink to="">Shop</NavLink>
                <NavLink to="">New Arrivals</NavLink>
                <NavLink to="">Orders</NavLink>
                <NavLink to="">Contact</NavLink>
            </NavItems>
            <MobileMenu isOpen={isOpen}>
                <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>Home</NavLink>
                <Navlink onClick={() => setIsOpen(!isOpen)} to="">
                    Shop
                </Navlink>
                <Navlink onClick={() => setIsOpen(!isOpen)} to="">
                    New Arrivals
                </Navlink>
                <Navlink onClick={() => setIsOpen(!isOpen)} to="">
                    Orders
                </Navlink>
                <Navlink onClick={() => setIsOpen(!isOpen)} to="">
                    Contact
                </Navlink>
                <div
                 style={{
                  flex: "1",
                  display: "flex",
                  gap: "12px",
                 }}
                 >
                    <Button
                    text="Sign Up"
                    outlined="true"
                    small = "true"
                    onClick={() => setOpenAuth(!openAuth)}
                    />
                    <Button
                    text="Sign In"
                    small="true"
                    onClick={() => setOpenAuth(!openAuth)}
                    />
                </div>
            </MobileMenu>
            <MobileIcon>
                <Navlink to="/search">
                    <SearchRounded sx={{color: "inherit", fontSize: "30px"}}/>
                </Navlink>
                <Navlink to="/favorite">
                    <FavoriteBorder sx={{color: "inherit", fontSize: "28px"}}/>
                </Navlink>
                <Navlink to="/cart">
                    <ShoppingCartOutlined sx={{color: "inherit", fontSize: "28px"}}/>
                </Navlink>
                <Button text="SignIn" small="true" onClick={() => setOpenAuth(!openAuth)}/>
            </MobileIcon>
            <ButtonContainer>
                <Navlink to="/search">
                    <SearchRounded sx={{color: "inherit", fontSize: "30px"}}/>
                </Navlink>
                <Navlink to="/favorite">
                    <FavoriteBorder sx={{color: "inherit", fontSize: "28px"}}/>
                </Navlink>
                <Navlink to="/cart">
                    <ShoppingCartOutlined sx={{color: "inherit", fontSize: "28px"}}/>
                </Navlink>
                <Button text="SignIn"/>
            </ButtonContainer>
        </NavbarContainer>
    </Nav>    
  )
}

export default Navbar