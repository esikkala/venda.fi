import React, {
  useContext,
} from 'react';
import Image from 'next/image';
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
import FrontPageLogo from '../public/tehokas_luova.svg';

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
              <Image src={FrontPageLogo} width={391} height={167} />
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
