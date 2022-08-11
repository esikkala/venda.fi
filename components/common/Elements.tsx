import styled from 'styled-components';

export const HorizontalLine = styled.hr`
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color:${({ theme }) => theme.colors.lightGrey};
  height: 1px;
  margin-top: 2.75rem;
  margin-bottom: 2.75rem;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
