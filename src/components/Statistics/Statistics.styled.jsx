import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#CC${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Section = styled.section`
  margin: 0 auto;
  width: 500px;
  min-height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 70px;
  padding: 10px;
  width: calc(100% / 4);
  background-color: ${getRandomHexColor};
`;

export const Text = styled.span`
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  font-weight: 400;
`;