import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

const LinkStyle = css`
  color: ${({ theme }) => theme.colors.gray};
`;

const ActiveLinkStyle = css`
  color: ${({ theme }) => theme.colors.orange};
`;

type LinkContentProps = {
  isActive: boolean
};

// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
const LinkContent = styled.a<LinkContentProps>`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 1px;
 
  text-decoration: unset;
  ${({ isActive }) => {
    if (isActive) return ActiveLinkStyle;
    if (!isActive) return LinkStyle;
    return null;
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
  const router = useRouter();
  const { pathname } = router;
  return (
    <Nav>
      <Link href="/" passHref>
        <LogoContainer>
          {/* eslint-disable @next/next/no-img-element */}
          <img src="venda_logo.svg" width={111} height={144} alt="Venda logo" />
        </LogoContainer>
      </Link>
      <Link href="#marketing-communications" passHref>
        <LinkContent isActive={pathname === '/marketing-communications'}>
          {header.marketingCommmunications}
        </LinkContent>
      </Link>
      <Link href="#translation-services" passHref>
        <LinkContent isActive={pathname === '/translation-services'}>
          {header.translations}
        </LinkContent>
      </Link>
      <Link href="#outsource-your-project" passHref>
        <LinkContent isActive={pathname === '/outsource-your-project'}>
          {header.outsourceYourProject}
        </LinkContent>
      </Link>
      <Link href="#briefly" passHref>
        <LinkContent isActive={pathname === '/briefly'}>
          {header.briefly}
        </LinkContent>
      </Link>
      <Link href="#contact" passHref>
        <LinkContent isActive={pathname === '/contact'}>
          {header.contact}
        </LinkContent>
      </Link>
    </Nav>
  );
}

export default Header;
