import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { I18nContext } from '../contexts/I18nContext';
import VendaLogo from '../public/venda_logo_cleaned.svg';

const Nav = styled.nav`
  height: 170px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 2rem;
`;

// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
const LinkContent = styled.a`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: unset;
`;

const LogoContainer = styled.a`
  width: 300px;
  margin-right: ${({ theme }) => theme.gap * 4}px;
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
  return (
    <Nav>
      <LogoContainer>
        <Image src={VendaLogo} alt="Venda logo" />
      </LogoContainer>
      <Link href="/marketing-communications" passHref><LinkContent>{header.marketingCommmunications}</LinkContent></Link>
      <Link href="/translations" passHref><LinkContent>{header.translations}</LinkContent></Link>
      <Link href="/outsource-your-project" passHref><LinkContent>{header.outsourceYourProject}</LinkContent></Link>
      <Link href="/briefly" passHref><LinkContent>{header.briefly}</LinkContent></Link>
      <Link href="/contact" passHref><LinkContent>{header.contact}</LinkContent></Link>
    </Nav>
  );
}

export default Header;
