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

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Full name"
          />

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

          <SubmitButton onPress={() => {}}>Create account</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Sign In</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
