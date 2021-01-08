const initialState = {
  isLoading: false,
  isError: false,
  isLogin: false,
  token: '',
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'REJECTED',
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: action.payload.data.success,
        token: action.payload.data.token,
        alertMsg: action.payload.data.message,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isLogin: false,
        token: '',
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
