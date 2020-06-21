import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Enter your email"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
          />

          <SubmitButton onPress={() => {}}>Sign In</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Create account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
