import React, {
  useContext,
} from 'react';
import { I18nContext } from '../contexts/I18nContext';
import {
  RootContainer,
  PageContainer,
  PageContent,
  BackgroundImage,
  Layout,
  TextContainer,
  H1,
  P,
  Bold,
} from '../components/Common';
import Header from '../components/Header';

function Home(): JSX.Element {
  const { localizations } = useContext(I18nContext);
  const { frontPage } = localizations;

  return (
    <RootContainer>
      <BackgroundImage>
        <PageContainer>
          <PageContent>
            <Header />
            <Layout>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/venda.fi/tehokas_luova.svg" width={391} height={167} alt="Tehokas logo" />
              <TextContainer>
                <H1>
                  {frontPage.heading}
                </H1>
                <P>
                  {frontPage.firstParagraph}
                </P>
                <P>
                  {frontPage.secondParagraph}
                </P>
                <Bold>
                  {frontPage.lastParagraph}
                </Bold>
              </TextContainer>
            </Layout>
          </PageContent>
        </PageContainer>
      </BackgroundImage>

    </RootContainer>
  );
}

export default Home;
