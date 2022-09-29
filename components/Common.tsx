import styled from 'styled-components';
// import backgroundImage from '../public/background.png';

export const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #eef0ee; */
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PageContent = styled.div`
  width: 1420px;

  @media only screen and (max-width: 1550px) {
    width: 1120px;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

`;

export const Layout = styled.div`
  height: calc(100% - 190px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 190px;

  @media only screen and (max-width: 1200px) {
    padding-top: 120px;
    height: calc(100% - 150px);
    width: calc(100% - 60px);
  }
`;

export const LeftLayout = styled(Layout)`
  align-items: flex-start;
  padding-left: 200px;
  @media only screen and (max-width: 1200px) {
    padding-left: 0;
  }
`;

export const TextContainer = styled.div`
  margin-top: 4rem;
  font-size: 18px;
  letter-spacing: 0.7px;
  width: 740px;
  height: 100%;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.black};
  @media only screen and (max-width: 1200px) {
    font-size: 14px;
    margin-top: 0;
    letter-spacing: normal;
    width: calc(100% - 2rem);
    padding-bottom: 2rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: inherit;
  text-align: left;
  margin-bottom:  1.5rem;
`;

export const MobileH1 = styled.h2`
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.3px;
  font-size: 14px;
  margin-left: -30px;
  padding-left: 2rem;
  padding-right: 1rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: inherit;
  text-align: left;
  margin-bottom:  1.5rem;
`;

export const P = styled.p`
  line-height: 1.5;
  margin-bottom:  1.5rem;
  font-weight: 300;
`;

export const BackgroundImage = styled.div`
  position: relative;
  background-image: url('background.png');
  @media only screen and (max-width: 500px) {
    background-image: url('mobiili_tausta.png');
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;
`;

export const Bold = styled(P)`
  font-weight: bold;
`;

export const Ul = styled.ul`
  list-style-position: inside;
  padding-left: 0;
  @media only screen and (max-width: 800px) {
    padding-left: 1rem;
  }
`;

export const Li = styled.li`
  &::marker {
   color: ${({ theme }) => theme.colors.orange};
  }
  margin-bottom: 0.5rem;
  line-height: 1.5;
  @media only screen and (max-width: 800px) {
    margin-bottom: 3px;
    list-style-position: outside;
  }
`;

export const Spacer = styled.div`
  height: 4rem;
  @media only screen and (max-width: 800px) {
    height: 1rem;
  }
`;

export const SpacerSmall = styled.div`
  height: 2rem;
`;

export const ContactHeading = styled(Bold)`
  margin-top: 0;
  margin-bottom: 0.25rem;
`;

export const ContactInfo = styled(P)`
  margin-top: 0;
  margin-bottom: 0.25rem;
`;

export const FirstRow = styled(H1)`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  @media only screen and (max-width: 800px) {
    line-height: 1.5;
  }
`;

export const SecondRow = styled(Bold)`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;
