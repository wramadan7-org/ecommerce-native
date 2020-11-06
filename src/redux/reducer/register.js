const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER_PENDING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'REGISTER_USER_REJECTED': {
      return {
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message
      }
    }
    case 'REGISTER_USER_FULFILLED': {
      return {
        ...state,
        isError: false,
        data: action.payload.data.data,
        alertMsg: action.payload.data.message
      }
    }
    default: {
      return state
    }
  }
}
