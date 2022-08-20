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
  LastP,
  HeaderBackground,
} from '../components/Common';
import Header from '../components/Header';

const LeftLayout = styled(Layout)`
  align-items: flex-start;
  padding-left: 200px;
`;

const OffSetBackgroundImage = styled(BackgroundImage)`
  background-position: 0 -950px;
`;

const Ul = styled.ul`
  list-style-position: inside;
  padding-left: 0;
`;

const Li = styled.li`
  &::marker {
   color: ${({ theme }) => theme.colors.orange};
  }
  margin-bottom: 0.5rem;
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
                <LastP>
                  {marketingCommunications.listHeading}
                </LastP>
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
