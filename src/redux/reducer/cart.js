const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alerMsg: '',
  status: false,
  total: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Rejected',
      };
    }
    case 'GET_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
        alertMsg: action.payload.data.message,
        status: action.payload.data.success,
        total: action.payload.data.total,
      };
    }
    default: {
      return state;
    }
  }
};
