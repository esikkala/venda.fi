import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const LinkColor = css`
  color: ${({ theme }) => theme.colors.gray};
`;

const LinkColorActive = css`
  color: ${({ theme }) => theme.colors.orange};
`;

type LinkProps = {
  pageId: string,
  activePage: string,
};

const Link = styled.a<LinkProps>`
  /* font-family: 'Helvetica', 'Arial', sans-serif; */
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 1px;
  text-decoration: none;

  @media only screen and (max-width: 1200px) {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 1rem;

  }
  
    
  ${({ pageId, activePage }) => {
    if (pageId === activePage) {
      return LinkColorActive;
    }
    return LinkColor;
  }}
`;

type NavLinkProps = {
  pageId: string,
  activePage: string,
  children: ReactNode,
  onClick: Function,
};

function NavLink(props: NavLinkProps): JSX.Element {
  const {
    pageId, activePage, children, onClick,
  } = props;

  return (
    <Link
      href={`#${pageId}`}
      activePage={activePage}
      pageId={pageId}
      onClick={(event) => onClick(event, pageId)}
    >
      {children}
    </Link>
  );
}

export default NavLink;
