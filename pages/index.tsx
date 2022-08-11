import React, {
  useContext,
} from 'react';
import styled from 'styled-components';
import { I18nContext } from '../contexts/I18nContext';
import {
  RootContainer,
  HeaderContainer,
  PageContainer,
  PageContent,
} from '../components/layouts/PageLayouts';
import Header from '../components/Header';

// const H1 = styled.h1`
//    ${({ theme }) => theme.fonts.headers.desktop.h1}
// `;

// const H2 = styled.h2`
//    ${({ theme }) => theme.fonts.headers.desktop.h2}
//    text-align: center;
//    margin-top: 0;
// `;

// const H3 = styled.h3`
//    ${({ theme }) => theme.fonts.headers.desktop.h3}
//    margin-top: 0;
// `;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1000px;
`;

function Home(): JSX.Element {
  const { localizations } = useContext(I18nContext);
  const { frontPage } = localizations;

  return (
    <RootContainer>
      <HeaderContainer>
        <PageContent>
          <Header />
        </PageContent>
      </HeaderContainer>
      <PageContainer>
        <PageContent>
          <Layout>
            {frontPage.heading}
          </Layout>
        </PageContent>
      </PageContainer>
    </RootContainer>
  );
}

export default Home;
