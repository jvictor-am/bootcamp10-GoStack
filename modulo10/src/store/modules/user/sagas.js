import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    // eslint-disable-next-line camelcase
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Success!', 'Profile updated successfully.');

    // toast.success('Profile updated successfully !');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Update Failure!',
      'Not possible to update your profile, please check your credentials.'
    );

    // toast.error(
    //   'Not possible to update your profile, please check your credentials !'
    // );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
