const initialState = {
  isLoading: false,
  isError: false,
  alertMsg: '',
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_PRODUCT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Request rejected',
      };
    }
    case 'GET_PRODUCT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        alertMsg: 'All your data',
        data: action.payload.data.result,
      };
    }
    default: {
      return state;
    }
  }
};
