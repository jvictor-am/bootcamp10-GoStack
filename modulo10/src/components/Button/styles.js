import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  /* background: #ff8907; */
  background: #6d2a17;
  /* background: #3b9eff; */
  border-radius: 4px;
  /* margin: 16px; */

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
