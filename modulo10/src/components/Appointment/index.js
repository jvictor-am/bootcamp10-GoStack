import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import en from 'date-fns/locale/en-US';
// import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: en,
      addSuffix: true,
    });
  }, [data.date]);

  const avatar = data.provider.avatar
    ? `http://192.168.0.103:5000/files/${data.provider.avatar.path}`
    : `http://api.adorable.io/avatar/50/${data.provider.name}.png`;

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: avatar,
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={24} color="#ff1919" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
