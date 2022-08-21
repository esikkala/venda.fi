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
  Bold,
} from '../components/Common';
import Header from '../components/Header';

const LeftLayout = styled(Layout)`
  align-items: flex-start;
  padding-left: 200px;
`;

const OffSetBackgroundImage = styled(BackgroundImage)`
  background-position: 0 -2700px;
`;

const FirstRow = styled(H1)`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

const SecondRow = styled(Bold)`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

function OutsourceYourProject(): JSX.Element {
  const { localizations } = useContext(I18nContext);
  const { outsourceYourProject } = localizations;

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
                <FirstRow>
                  {outsourceYourProject.heading}
                </FirstRow>
                <SecondRow>
                  {outsourceYourProject.headingSecondRow}
                </SecondRow>
                <P>
                  {outsourceYourProject.firstParagraph}
                </P>
                <P>
                  {outsourceYourProject.secondParagraph}
                </P>
              </TextContainer>
            </LeftLayout>
          </PageContent>
        </PageContainer>
      </OffSetBackgroundImage>
    </RootContainer>
  );
}

export default OutsourceYourProject;
