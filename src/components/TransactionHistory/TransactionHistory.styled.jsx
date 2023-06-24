import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 500px;
`;

export const Rows = styled.td`
  border: 1px solid black;
  padding: 8px;
  text-align: center;
  text-transform: capitalize;
`;

export const HeadRows = styled(Rows)`
    background-color: #218decc1;
    color: #fff;
    width: 25%;
`