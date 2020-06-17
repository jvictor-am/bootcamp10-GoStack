import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    // eslint-disable-next-line camelcase
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassord ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Profile updated successfully !');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error(
      'Not possible to update your profile, please check your credentials !'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
