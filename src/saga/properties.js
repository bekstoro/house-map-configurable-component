import axios from 'axios'
import { all, call, cancelled, put, takeLatest } from 'redux-saga/effects'
import { GET_PROPERTIES_REQUEST, GET_PROPERTIES_ERROR, GET_PROPERTIES_SUCCESS } from '../redux/constants'
import { Service } from '../services'

function* getPropertiesSaga() {
  yield takeLatest(GET_PROPERTIES_REQUEST, getPropertiesRequest)
}

function* getPropertiesRequest() {
  try {
    const response = yield call(Service.getProperties)
    yield put(getPropertiesSuccess(response.data && response.data.data))
  } catch (err) {
    yield put(getPropertiesError(err))
  } finally {
    const source = axios.CancelToken.source()
    if (yield cancelled()) {
      source.cancel()
    }
  }
}

function getPropertiesError(result) {
  return {
    type: GET_PROPERTIES_ERROR,
    payload: result
  }
}

function getPropertiesSuccess(result) {
  return {
    type: GET_PROPERTIES_SUCCESS,
    payload: result
  }
}

export const propertiesSaga = function* () {
  yield all([
    getPropertiesSaga()
  ])
}
