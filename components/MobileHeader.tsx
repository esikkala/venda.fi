import React, {
  useContext, useState,
} from 'react';
import styled, { css } from 'styled-components';
import { I18nContext } from '../contexts/I18nContext';
import NavLink from './NavLink';
// import vendaLogo from '../public/venda_logo.svg';

const OpenStyle = css`
  background-color: rgba(212, 159, 59, 0.9);
`;

const Nav = styled.nav< { $isOpen: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ $isOpen }) => {
    if ($isOpen) return OpenStyle;
    return null;
  }}
    
  @media only screen and (min-width: 1200px) {
    display: none;
  }

  padding-bottom: 1.5rem;
`;

const ButtonContainer = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    z-index: 1;
    padding: 1rem;
  `;

const LogoAndButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

/**
   * A functional component for creating a mobile navigation header.
   */
function MobileHeader() {
  const { localizations } = useContext(I18nContext);
  const { header } = localizations;
  const [activePage, setActivePage] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const handleNavlinkOnClick = (event: React.MouseEvent<HTMLAnchorElement>, pageId: string) => {
    setActivePage(pageId);
  };

  return (
    <Nav $isOpen={isOpen}>
      <LogoAndButtonContainer>
        <ButtonContainer
          href="#home"
          onClick={(event) => handleNavlinkOnClick(event, '#home')}
        >
          {/* eslint-disable @next/next/no-img-element */}
          <img src="venda_logo.svg" width={81} height={114} alt="Venda logo" />
        </ButtonContainer>
        <ButtonContainer
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* eslint-disable @next/next/no-img-element */}
          {isOpen && <img src="close_icon.svg" width={81} height={114} alt="Close" />}
          {!isOpen && <img src="menu_viivat.svg" width={80} height={80} alt="Menu" />}
        </ButtonContainer>
      </LogoAndButtonContainer>
      {isOpen && (
      <>
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
      </>
      )}
    </Nav>
  );
}

export default MobileHeader;
