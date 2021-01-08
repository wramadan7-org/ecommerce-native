const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MYPROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'MYPROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'MYPROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        alertMsg: action.payload.data.message,
      };
    }
    default: {
      return state;
    }
  }
};
