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
  HeaderBackground,
  ContactHeading,
  ContactInfo,
  SpacerSmall,
} from '../components/Common';
import Header from '../components/Header';

const LeftLayout = styled(Layout)`
  align-items: flex-start;
  padding-left: 200px;
`;

const OffSetBackgroundImage = styled(BackgroundImage)`
  background-position: 0 -4700px;
`;

function Contact(): JSX.Element {
  const { localizations } = useContext(I18nContext);
  const { contact } = localizations;

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
                <SpacerSmall />
                <ContactInfo>
                  {contact.address}
                </ContactInfo>
                <ContactInfo>
                  {contact.postOffice}
                </ContactInfo>
                <ContactInfo>
                  {contact.country}
                </ContactInfo>
              </TextContainer>
            </LeftLayout>
          </PageContent>
        </PageContainer>
      </OffSetBackgroundImage>
    </RootContainer>
  );
}

export default Contact;
