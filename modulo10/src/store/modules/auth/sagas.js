import { Alert } from 'react-native';
import { takeLatest, call, put, all, delay } from 'redux-saga/effects';

// import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert('Error to SignIn !', 'User must not be service provider.');
      // toast.error(
      //   'User is not a provider. Maybe you need to access mobile version !'
      // );
      yield put(signFailure());
      // console.tron.error('User is not a provider !');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield delay(500);

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    yield delay(500);

    Alert.alert(
      'Authentication Failure !',
      'Incorrect email or password. Please check.'
    );
    // toast.error(
    //   'Authentication Failure. Incorrect email or password. Please check !'
    // );

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', { name, email, password });

    yield delay(500);

    yield put(signUpSuccess(name, email, password));
    // history.push('/');
  } catch (err) {
    yield delay(500);

    Alert.alert(
      'Registration Failure !',
      'Something went wrong. Please try again.'
    );
    // toast.error('Registration Failure. Please check !');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
