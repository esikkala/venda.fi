import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
// import Image from 'next/image';
import Header from '../Header';

export const RootContainer = styled.div`
    min-height: 100vh;
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled(PageContainer)`
  background: ${({ theme }) => theme.colors.white};
`;

export const PageContent = styled.div`
    width: 1420px;
`;

export const PageHeading = styled.h1`
    ${({ theme }) => theme.fonts.headers.desktop.h1} 
    margin-top: 1rem;
    margin-bottom: 0;
`;

export const TestContainer = styled.div`
  min-height: 500px;
  margin-top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 42px;
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
`;

export const CardGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
`;

type LayoutProps = {
  children: ReactNode,
  title?: string,
};

export function PageLayoutFullWidth(props: LayoutProps) {
  const {
    children, title,
  } = props;
  return (
    <RootContainer>
      <HeaderContainer>
        <PageContent>
          <Header />
        </PageContent>
      </HeaderContainer>
      <PageContainer>
        <PageContent>
          {title && <PageHeading>{title}</PageHeading>}
          {children}
        </PageContent>
      </PageContainer>
    </RootContainer>
  );
}

PageLayoutFullWidth.defaultProps = {
  title: null,
};
