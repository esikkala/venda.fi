import React, {
  useContext,
} from 'react';
import styled from 'styled-components';
import { I18nContext } from '../contexts/I18nContext';
import {
  PageContainer,
  PageContent,
  BackgroundImage,
  Layout,
  LeftLayout,
  TextContainer,
  H1,
  MobileH1,
  H2,
  P,
  Ul,
  Li,
  Bold,
  FirstRow,
  SecondRow,
  ContactHeading,
  ContactInfo,
  Spacer,
  SpacerSmall,
} from '../components/Common';
import Header, { HeaderBackground } from '../components/Header';
import MobileHeader from '../components/MobileHeader';

const Page = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;            
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  @media only screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;

const MobileImageContainer = styled.div`
   @media only screen and (min-width: 1200px) {
    display: none;
  }
  margin-bottom: 1rem;
`;

const MobileBottomSpacer = styled.div`
  height: 500px;
`;

const DesktopImageContainer = styled.div`
   @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

function Home(): JSX.Element {
  const { localizations } = useContext(I18nContext);
  const {
    frontPage, marketingCommunications, translationServices,
    outsourceYourProject, briefly, contact, header,
  } = localizations;

  return (
    <BackgroundImage>
      <HeaderBackground>
        <MobileHeader />
        <PageContainer>
          <PageContent>
            <Header />
          </PageContent>
        </PageContainer>
      </HeaderBackground>
      <PageContainer>
        <PageContent>
          <Page id="home">
            <Layout>
              <MobileImageContainer>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="tehokas_luova_con.svg" width={359} height={90} alt="Tehokas logo" />
              </MobileImageContainer>
              <DesktopImageContainer>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="tehokas_luova_con.svg" width={469} height={200} alt="Tehokas logo" />
              </DesktopImageContainer>
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
          </Page>
          <Page id="marketing-communications">
            <LeftLayout>
              <MobileH1>{header.marketingCommmunications}</MobileH1>
              <TextContainer>
                <H2>
                  {marketingCommunications.heading}
                </H2>
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
          </Page>
          <Page id="translation-services">
            <LeftLayout>
              <MobileH1>{header.translations}</MobileH1>
              <TextContainer>
                <H2>
                  {translationServices.heading}
                </H2>
                <P>
                  {translationServices.firstParagraph}
                </P>
                <P>
                  {translationServices.secondParagraph}
                </P>
              </TextContainer>
            </LeftLayout>
          </Page>
          <Page id="outsource-your-project">
            <LeftLayout>
              <MobileH1>{header.outsourceYourProject}</MobileH1>
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
          </Page>
          <Page id="briefly">
            <LeftLayout>
              <MobileH1>{header.briefly}</MobileH1>
              <TextContainer>
                <H2>
                  {briefly.heading}
                </H2>
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
          </Page>
          <Page id="contact">
            <LeftLayout>
              <MobileH1>{header.contact}</MobileH1>
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
              <MobileBottomSpacer />
            </LeftLayout>
          </Page>
        </PageContent>
      </PageContainer>
    </BackgroundImage>
  );
}

export default Home;
