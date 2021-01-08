const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alerMsg: '',
  status: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CREATE_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Rejected',
      };
    }
    case 'CREATE_CART_FULFILLED': {
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
