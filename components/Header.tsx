import React, {
  useContext, useState,
} from 'react';
import styled from 'styled-components';
import { I18nContext } from '../contexts/I18nContext';
import NavLink from './NavLink';
// import vendaLogo from '../public/venda_logo.svg';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  height: 170px;
  width: 1420px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media only screen and (max-width: 1550px) {
    width: 1120px;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }

`;

export const HeaderBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 190px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

const LogoContainer = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1;
`;

/**
 * A functional component for creating a navigation header.
 */
function Header() {
  const { localizations } = useContext(I18nContext);
  const { header } = localizations;
  const [activePage, setActivePage] = useState('home');

  const handleNavlinkOnClick = (event: React.MouseEvent<HTMLAnchorElement>, pageId: string) => {
    setActivePage(pageId);
  };

  return (
    <Nav>
      <LogoContainer
        href="#home"
        onClick={(event) => handleNavlinkOnClick(event, '#home')}
      >
        {/* eslint-disable @next/next/no-img-element */}
        <img src="venda_logo.svg" width={111} height={144} alt="Venda logo" />
      </LogoContainer>
      <NavLink
        pageId="marketing-communications"
        activePage={activePage}
        onClick={handleNavlinkOnClick}
      >
        {header.marketingCommmunications}
      </NavLink>
      <NavLink
        pageId="translation-services"
        activePage={activePage}
        onClick={handleNavlinkOnClick}
      >
        {header.translations}
      </NavLink>
      <NavLink
        pageId="outsource-your-project"
        activePage={activePage}
        onClick={handleNavlinkOnClick}
      >
        {header.outsourceYourProject}
      </NavLink>
      <NavLink
        pageId="briefly"
        activePage={activePage}
        onClick={handleNavlinkOnClick}
      >
        {header.briefly}
      </NavLink>
      <NavLink
        pageId="contact"
        activePage={activePage}
        onClick={handleNavlinkOnClick}
      >
        {header.contact}
      </NavLink>
    </Nav>
  );
}

export default Header;
