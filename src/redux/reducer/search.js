const initialState = {
  dataSearch: [],
  isLoading: false,
  isError: false,
  success: false,
  alertMsg: '',
  isSearch: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ITEM_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SEARCH_ITEM_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Rejected',
      };
    }
    case 'SEARCH_ITEM_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataSearch: action.payload.data.result,
        alertMsg: action.payload.data.message,
        success: action.payload.data.success,
        isSearch: true,
      };
    }

    case 'CLEAR_SEARCH': {
      return {
        ...state,
        dataSearch: [],
        isLoading: false,
        isError: false,
        success: false,
        alertMsg: '',
        isSearch: false,
      };
    }
    default: {
      return state;
    }
  }
};
