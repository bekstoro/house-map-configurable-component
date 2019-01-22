import { GET_PROPERTIES_REQUEST, GET_PROPERTIES_ERROR, GET_PROPERTIES_SUCCESS } from '../redux/constants'

export const initialState = {
  isLoading: true,
  items: []
}

const properties = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PROPERTIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case GET_PROPERTIES_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false
      }

    case GET_PROPERTIES_ERROR:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default properties
