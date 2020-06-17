import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  // let imageURL = '';

  // if (profile.avatar === null) {
  //   imageURL = 'https://api.adorable.io/avatars/50/abott@adorable.png';
  // } else {
  //   imageURL = profile.avatar.url;
  // }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src={
                profile.avatar === null
                  ? 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  : profile.avatar.url
              }
              // src={imageURL}
              alt="Profile pic"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
