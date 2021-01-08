const initialState = {
  isLoading: false,
  isError: false,
  alertMsg: '',
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CHANGE_PASSWORD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'CHANGE_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        success: action.payload.data.success,
        alertMsg: action.payload.data.message,
      };
    }
    case 'CLEAR_PASSWORD': {
      return {
        isLoading: false,
        isError: false,
        alertMsg: '',
        success: false,
      };
    }
    default: {
      return state;
    }
  }
};
