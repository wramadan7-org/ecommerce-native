const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
  status: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'EDIT_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'EDIT_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        alertMsg: action.payload.data.message,
        status: action.payload.data.success,
      };
    }
    default: {
      return state;
    }
  }
};
