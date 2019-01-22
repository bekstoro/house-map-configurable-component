import { combineReducers } from 'redux'
import properties from '../reducers/properties'
import templates from '../reducers/templates'

export default combineReducers({
  properties,
  templates
})
