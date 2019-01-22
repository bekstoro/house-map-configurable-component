import { GET_TEMPLATES_REQUEST, GET_TEMPLATES_ERROR, GET_TEMPLATES_SUCCESS } from '../redux/constants'

export const initialState = {
  isLoading: true,
  items: []
}

const templates = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_TEMPLATES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case GET_TEMPLATES_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false
      }

    case GET_TEMPLATES_ERROR:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default templates
