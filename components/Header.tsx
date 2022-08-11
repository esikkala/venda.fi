import React, { useContext } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styled from 'styled-components';
import { I18nContext } from '../contexts/I18nContext';

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
  margin-left: ${({ theme }) => theme.gap * 4}px;
  text-decoration: unset;
`;

/**
 * A functional component for creating a navigation header.
 */
function Header() {
  const { localizations } = useContext(I18nContext);
  const { header } = localizations;
  return (
    <Nav>
      <Link href="/marketing-communications" passHref><LinkContent>{header.marketingCommmunications}</LinkContent></Link>
      <Link href="/translations" passHref><LinkContent>{header.translations}</LinkContent></Link>
      <Link href="/outsource-your-project" passHref><LinkContent>{header.outsourceYourProject}</LinkContent></Link>
      <Link href="/briefly" passHref><LinkContent>{header.briefly}</LinkContent></Link>
      <Link href="/contact" passHref><LinkContent>{header.contact}</LinkContent></Link>
    </Nav>
  );
}

export default Header;
