import axios from 'axios'
import { all, call, cancelled, put, takeLatest } from 'redux-saga/effects'
import { GET_TEMPLATES_REQUEST, GET_TEMPLATES_ERROR, GET_TEMPLATES_SUCCESS } from '../redux/constants'
import { Service } from '../services'

function* getTemplatesSaga() {
  yield takeLatest(GET_TEMPLATES_REQUEST, getTemplatesRequest)
}

function* getTemplatesRequest() {
  try {
    const response = yield call(Service.getTemplates)
    yield put(getTemplatesSuccess(response.data && response.data.map(({template}) => template)))
  } catch (err) {
    yield put(getTemplatesError(err))
  } finally {
    const source = axios.CancelToken.source()
    if (yield cancelled()) {
      source.cancel()
    }
  }
}

function getTemplatesError(result) {
  return {
    type: GET_TEMPLATES_ERROR,
    payload: result
  }
}

function getTemplatesSuccess(result) {
  return {
    type: GET_TEMPLATES_SUCCESS,
    payload: result
  }
}

export const templatesSaga = function* () {
  yield all([
    getTemplatesSaga()
  ])
}
