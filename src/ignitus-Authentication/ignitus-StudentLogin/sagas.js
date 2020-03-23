/* eslint-disable no-throw-literal */
import { effects } from 'redux-saga';
import * as t from './actionTypes';
import * as a from './actions';
import * as api from '../../ignitus-Api';

const {
  call, put, takeLatest, all,
} = effects;

function* signIn(action) {
  const { email, password } = action;
  try {
    const data = yield call(api.signIn, email, password);
    if (!data.data.data) {
      throw { ...data };
    } else {
      localStorage.setItem('authenticated', true);
      localStorage.setItem('data', JSON.stringify(data.data.data.clientData));
      yield put(a.logInResponse(data.data));
    }
  } catch (e) {
    yield put(a.logInResponse(e.data));
  }
}

function* actionWatcher() {
  yield takeLatest(t.LOG_IN_REQUEST, signIn);
}

export default function* sagas() {
  yield all([actionWatcher()]);
}
