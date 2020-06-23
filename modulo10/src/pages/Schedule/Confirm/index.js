import React, { useMemo } from 'react';
import {
  useNavigation,
  useRoute,
  StackActions,
} from '@react-navigation/native';
import { formatRelative, parseISO } from 'date-fns';
import en from 'date-fns/locale/en-US';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm() {
  const route = useRoute();

  const navigation = useNavigation();

  const { provider, time } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: en }),
    [time]
  );

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    const popAction = StackActions.pop(2);

    navigation.navigate('Dashboard');
    navigation.dispatch(popAction);
  }

  // const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? `http://192.168.0.103:5000/files/${provider.avatar.path}`
              : `http://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>

        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={handleAddAppointment}>
          Confirm Appointment
        </SubmitButton>
      </Container>
    </Background>
  );
}
