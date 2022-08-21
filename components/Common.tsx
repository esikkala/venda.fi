import styled from 'styled-components';

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
  letter-spacing: 0.7px;
  width: 740px;
  color: ${({ theme }) => theme.colors.black};
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: inherit;
  text-align: left;
  margin-bottom:  1.5rem;
`;

export const P = styled.p`
  line-height: 1.75rem;
  margin-bottom:  1.5rem;
  font-weight: 300;
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
