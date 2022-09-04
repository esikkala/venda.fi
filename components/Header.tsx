import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { I18nContext } from '../contexts/I18nContext';
// import vendaLogo from '../public/venda_logo.svg';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  height: 170px;
  width: 1420px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HeaderBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 190px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

const LinkColor = css`
  color: ${({ theme }) => theme.colors.gray};
`;

const LinkColorActive = css`
  color: ${({ theme }) => theme.colors.orange};
`;

// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
const LinkContent = styled.a<{ pageId: string, activePage: string }>`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 1px;
  text-decoration: unset;
  
    
  ${({ pageId, activePage }) => {
    if (pageId === activePage) {
      return LinkColorActive;
    }
    return LinkColor;
  }}
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
  const [activePage, setActivePage] = useState('#home');

  const handleScroll = () => {
    setActivePage(window.location.hash);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Nav>
      <LogoContainer href="#home">
        {/* eslint-disable @next/next/no-img-element */}
        <img src="venda_logo.svg" width={111} height={144} alt="Venda logo" />
      </LogoContainer>
      <LinkContent
        href="#marketing-communications"
        pageId="#marketing-communications"
        activePage={activePage}
      >
        {header.marketingCommmunications}
      </LinkContent>
      <LinkContent
        href="#translation-services"
        pageId="#translation-services"
        activePage={activePage}
      >
        {header.translations}
      </LinkContent>
      <LinkContent
        href="#outsource-your-project"
        pageId="#outsource-your-project"
        activePage={activePage}
      >
        {header.outsourceYourProject}
      </LinkContent>
      <LinkContent
        href="#briefly"
        pageId="#briefly"
        activePage={activePage}
      >
        {header.briefly}
      </LinkContent>
      <LinkContent
        href="#contact"
        pageId="#contact"
        activePage={activePage}
      >
        {header.contact}
      </LinkContent>
    </Nav>
  );
}

export default Header;
