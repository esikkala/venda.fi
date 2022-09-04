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
  LeftLayout,
  TextContainer,
  H1,
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

const Page = styled.div`
  height: 100vh;
  @media screen and ( max-height: 800px ) {
    height: fit-content;
  }
`;

function Home(): JSX.Element {
  const { localizations } = useContext(I18nContext);
  const {
    frontPage, marketingCommunications, translationServices,
    outsourceYourProject, briefly, contact,
  } = localizations;

  return (
    <RootContainer>
      <BackgroundImage>
        <HeaderBackground>
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
                <SpacerSmall />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="tehokas_luova.svg" width={469} height={200} alt="Tehokas logo" />
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
            </Page>
          </PageContent>
        </PageContainer>
      </BackgroundImage>

    </RootContainer>
  );
}

export default Home;
