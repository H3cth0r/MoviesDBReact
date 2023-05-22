import styled from "styled-components";

export const MainNavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    height: 15vh;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
`;
export const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 70%;
    justify-content: space-evenly;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: white;
    @media screen and (max-width: 768px) {
        /* Styles for smaller screens */
        justify-content: space-between;
    }
`;
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;

    @media screen and (max-width: 768px) {
        /* Styles for smaller screens */
        padding-left: 8%;
    }
`;
export const TitleSite = styled.img`
    width: 100%;
`;
export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
`;
export const LinkTo = styled.a`
    font-size: medium;
    font-weight: bold;
    text-decoration: none;
    color: black;
    &.active{
        color: gray;
    }
`;

export const DropdownMenuWrapper = styled.div`
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 100%;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        /* Styles for smaller screens */
        display: flex;
    }
`;
export const DropdownMenu = styled.ul`
    list-style: none;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border-radius: 10px;
`;

export const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  
  &:hover {
    background-color: #f2f2f2;
  }
`;
export const ProfileImage = styled.div`
    width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

export const PImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;