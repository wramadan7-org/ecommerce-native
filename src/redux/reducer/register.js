const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'REGISTER_USER_REJECTED': {
      return {
        isLoading: false,
        isError: true,
        alertMsg: 'Rejected',
      };
    }
    case 'REGISTER_USER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        alertMsg: action.payload.data.message,
        success: action.payload.data.success,
      };
    }
    default: {
      return state;
    }
  }
};
