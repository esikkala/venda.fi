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
  background-position: 0 -2800px;
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
                <H1>
                  {outsourceYourProject.heading}
                  <br />
                  {outsourceYourProject.headingSecondRow}
                </H1>
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
