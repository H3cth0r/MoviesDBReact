import React, { useEffect, useState } from 'react'
import { OwnNavBarProp } from './types'

import { DropdownItem, DropdownMenu, DropdownMenuWrapper, LinkTo, LogoWrapper, MainNavBar, MenuWrapper, NavBarWrapper, PImage, ProfileImage, TitleSite } from './styles'
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "./static/logo.png";
import { useLocation } from 'react-router-dom';

const OwnNavBar: React.FC<OwnNavBarProp> = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const loc = useLocation();
    const isAdminRoute = loc.pathname.startsWith("/logged");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
              setIsMobile(true);
            } else {
              setIsMobile(false);
            }
          };
      
          handleResize();
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const location = useLocation();
    const isActive = (route: any) => {
        return location.pathname === route;
    };



    return (
        <MainNavBar>
            <NavBarWrapper>
                {/** Logo */}
                <LogoWrapper>
                    <TitleSite src={logo} alt="" />
                </LogoWrapper>

                {isMobile ? (
                    <>
                        <IconButton onClick={toggleDropdown}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </>
                ) : (
                    <MenuWrapper>
                        <LinkTo href={isAdminRoute ? "/logged" : "/"}                            className={isActive("/") || isActive("/logged") ? 'active' : ''}>Home</LinkTo>
                        <LinkTo href={isAdminRoute ? "/logged/popular" : "/popular"}             className={isActive("/popular") || isActive("/logged/popular") ? 'active' : ''}>Popular</LinkTo>
                        <LinkTo href={isAdminRoute ? "/logged/top-rated" : "/top-rated"}         className={isActive("/top-rated") || isActive("/logged/top-rated") ? 'active' : ''}>Top Rated</LinkTo>
                        <LinkTo href={isAdminRoute ? "/logged/now-playing" : "/now-playing"}     className={isActive("/now-playing") || isActive("/logged/now-playing") ? 'active' : ''}>Now Playing</LinkTo>
                        <LinkTo href={isAdminRoute ? "/logged/my-favorites" : "/my-favorites"}   className={isActive("/my-favorites") || isActive("/logged/my-favorites") ? 'active' : ''}>Favorites</LinkTo>
                    </MenuWrapper>
                )}

                {isAdminRoute && (
                    <ProfileImage>
                        <PImage src='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EJIO54CGVNCAXLB46GI57WHCBI.jpg'></PImage>
                    </ProfileImage>
                )}


            </NavBarWrapper>
                {/** User Photo */}
                <>
                    {dropdownOpen && (
                        <DropdownMenuWrapper>
                            <DropdownMenu>
                                <DropdownItem>
                                    <LinkTo href={isAdminRoute ? "/logged" : "/"}                            className={isActive("/") || isActive("/logged") ? 'active' : ''}>Home</LinkTo>
                                </DropdownItem>
                                <DropdownItem>
                                    <LinkTo href={isAdminRoute ? "/logged/popular" : "/popular"}             className={isActive("/popular") || isActive("/logged/popular") ? 'active' : ''}>Popular</LinkTo>
                                </DropdownItem>
                                <DropdownItem>
                                    <LinkTo href={isAdminRoute ? "/logged/top-rated" : "/top-rated"}         className={isActive("/top-rated") || isActive("/logged/top-rated") ? 'active' : ''}>Top Rated</LinkTo>
                                </DropdownItem>
                                <DropdownItem>
                                    <LinkTo href={isAdminRoute ? "/logged/now-playing" : "/now-playing"}     className={isActive("/now-playing") || isActive("/logged/now-playing") ? 'active' : ''}>Now Playing</LinkTo>
                                </DropdownItem>
                                <DropdownItem>
                                    <LinkTo href={isAdminRoute ? "/logged/my-favorites" : "/my-favorites"}   className={isActive("/my-favorites") || isActive("/logged/my-favorites") ? 'active' : ''}>Favorites</LinkTo>
                                </DropdownItem>
                            </DropdownMenu>
                        </DropdownMenuWrapper>
                    )}
                </>
        </MainNavBar>
    );
}

export default OwnNavBar