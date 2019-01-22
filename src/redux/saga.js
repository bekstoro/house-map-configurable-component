import { all } from 'redux-saga/effects';
import { propertiesSaga } from '../saga/properties';
import { templatesSaga } from '../saga/templates';

export default function* rootSaga() {
  yield all([propertiesSaga(), templatesSaga()]);
}
