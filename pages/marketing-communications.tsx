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
  LeftLayout,
  TextContainer,
  H1,
  P,
  Bold,
  HeaderBackground,
  Ul,
  Li,
} from '../components/Common';
import Header from '../components/Header';

const OffSetBackgroundImage = styled(BackgroundImage)`
  background-position: 0 -950px;
`;

function MarketingCommunications(): JSX.Element {
  const { localizations } = useContext(I18nContext);
  const { marketingCommunications } = localizations;

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
                  {marketingCommunications.heading}
                </H1>
                <P>
                  {marketingCommunications.firstParagraph}
                </P>
                <Bold>
                  {marketingCommunications.listHeading}
                </Bold>
                <Ul>
                  {marketingCommunications.list.map((item: string) => (
                    <Li key={`list-${item}`}>
                      {item}
                    </Li>
                  ))}
                </Ul>
              </TextContainer>
            </LeftLayout>
          </PageContent>
        </PageContainer>
      </OffSetBackgroundImage>
    </RootContainer>
  );
}

export default MarketingCommunications;
