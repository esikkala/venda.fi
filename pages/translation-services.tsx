import React, {
  useContext,
} from 'react';
import styled from 'styled-components';
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
  HeaderBackground,
} from '../components/Common';
import Header from '../components/Header';

const LeftLayout = styled(Layout)`
  align-items: flex-start;
  padding-left: 200px;
`;

const OffSetBackgroundImage = styled(BackgroundImage)`
  background-position: 0 -1950px;
`;

function TranslationServices(): JSX.Element {
  const { localizations } = useContext(I18nContext);
  const { translationServices } = localizations;

  return (
    <RootContainer>
      <OffSetBackgroundImage>
        <HeaderBackground>
          <PageContainer>
            <PageContent>
              <Header />
            </PageContent>
          </PageContainer>
        </HeaderBackground>
        <PageContainer>
          <PageContent>
            <LeftLayout>
              <TextContainer>
                <H1>
                  {translationServices.heading}
                </H1>
                <P>
                  {translationServices.firstParagraph}
                </P>
                <P>
                  {translationServices.secondParagraph}
                </P>
              </TextContainer>
            </LeftLayout>
          </PageContent>
        </PageContainer>
      </OffSetBackgroundImage>
    </RootContainer>
  );
}

export default TranslationServices;
