import styled from '@emotion/styled';

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  padding: 20px;
  height: 450px;
  width: 400px;
  background-color: rgb(151, 190, 224);
`;

export const Desrciption = styled.div`
  margin: 20px auto 0;
  height: 50%;
  width: 100%;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  background-color: #fff;
  padding: 5px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 35px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-top: 20px;
`;

export const Tag = styled.p`
  color: #615e5ef8;
  margin: 5px;
  font-size: 25px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const Location = styled.p`
  margin: 10px;
  color: #615e5ef8;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
`
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 2);
  height: 100px;
  padding: 5px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  background-color: rgb(68, 116, 158);
`;

export const StatsLabel = styled.span`
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-top: 10px;
  color: #ffffffb6;
`;
export const StatsValue = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  margin-top: 20px;
`;