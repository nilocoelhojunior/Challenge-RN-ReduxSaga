import { Body as NBBody, Title as NBTitle, Left as NBLeft, Right as NBRight } from 'native-base';

import styled from 'styled-components';

export const Title = styled(NBTitle)`
  align-self: center;
  font-family: Roboto;
  font-weight: normal;
  font-size: 20px;
  margin-left: -5px;
  color: ${props => props.theme.black};
`;

export const Left = styled(NBLeft)`
  flex: 1;
`;

export const Right = styled(NBRight)`
  flex: 1;
`;

export const Body = styled(NBBody)`
  flex: 1;
`;

export const Border = styled.View`
  width: 30%;
  height: 2px;
  background: rgba(0, 0, 0, 0.1);
  top: 12%;
  left: 34%;
  position: absolute;
`;
