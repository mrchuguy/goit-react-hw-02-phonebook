import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  padding-left: 20px;

  & li {
    font-size: 18px;
    font-weight: 500;
  }

  & li:not(:last-child) {
    margin-bottom: 8px;
  }
`;
