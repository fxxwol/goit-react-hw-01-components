import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  list-style: none;
  width: 400px;
`;

export const FriendItem = styled.li`
  padding: 8px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  column-gap: 30px;
  border-radius: 5px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;
