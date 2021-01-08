const initialState = {
  addTransactions: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADD_TRANSACTION_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
        success: false,
      };
    }
    case 'ADD_TRANSACTION_FULFILLED': {
      return {
        ...state,
        isError: false,
        alertMsg: action.payload.data.message,
        success: action.payload.data.success,
      };
    }
    case 'RESET_TRANSACTION': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        success: false,
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
