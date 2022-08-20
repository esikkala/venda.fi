import styled from 'styled-components';

export const HorizontalLine = styled.hr`
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.lightGrey};
  height: 1px;
  margin-top: 2.75rem;
  margin-bottom: 2.75rem;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const RootContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageContent = styled.div`
  width: 1420px;
`;

export const PageHeading = styled.h1`
    ${({ theme }) => theme.fonts.headers.desktop.h1} 
    margin-top: 1rem;
    margin-bottom: 0;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
`;

export const LeftLayout = styled(Layout)`
  align-items: flex-start;
  padding-left: 200px;
`;

export const TextContainer = styled.div`
  margin-top: 4rem;
  font-size: 18px;
  width: 700px;
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: inherit;
  text-align: left;
  margin-bottom:  1.5rem;
`;

export const P = styled.p`
  line-height: 1.75rem;
  letter-spacing: 0.5px;
  margin-bottom:  1.5rem;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  background-image:url('background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  max-width: 1700px;
`;

export const HeaderBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  padding-bottom: 2rem;
`;

export const Bold = styled(P)`
  font-weight: bold;
`;

export const Ul = styled.ul`
  list-style-position: inside;
  padding-left: 0;
`;

export const Li = styled.li`
  &::marker {
   color: ${({ theme }) => theme.colors.orange};
  }
  margin-bottom: 0.5rem;
`;

export const Spacer = styled.div`
  height: 4rem;
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
