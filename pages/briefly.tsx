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
  HeaderBackground,
  Ul,
  Li,
  ContactHeading,
  ContactInfo,
  Spacer,
} from '../components/Common';
import Header from '../components/Header';

const OffSetBackgroundImage = styled(BackgroundImage)`
  background-position: 0 -3700px;
`;

function Briefly(): JSX.Element {
  const { localizations } = useContext(I18nContext);
  const { briefly, contact } = localizations;

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
                  {briefly.heading}
                </H1>
                <Ul>
                  {briefly.list.map((item: string) => (
                    <Li key={`list-${item}`}>
                      {item}
                    </Li>
                  ))}
                </Ul>
                <Spacer />
                <ContactHeading>
                  {contact.heading}
                </ContactHeading>
                <ContactInfo>
                  {contact.name}
                </ContactInfo>
                <ContactInfo>
                  {contact.phone}
                </ContactInfo>
                <ContactInfo>
                  {contact.email}
                </ContactInfo>
              </TextContainer>
            </LeftLayout>
          </PageContent>
        </PageContainer>
      </OffSetBackgroundImage>
    </RootContainer>
  );
}

export default Briefly;
