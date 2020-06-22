import styled from 'styled-components/native';

import Input from '~/components/Input';
// import Button from '~/components/Button';
// import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Form = styled.ScrollView.attrs({
  // showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

// export const UpdateButton = styled(RectButton)`
export const UpdateButton = styled.TouchableOpacity`
  height: 46px;
  background: #6d2a17;
  border-radius: 4px;
  margin-top: 5px;

  align-items: center;
  justify-content: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  height: 46px;
  background: #cc0000;
  /* background: #000; */
  /* background: #ff1919; */
  border-radius: 4px;
  margin-top: 20px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
