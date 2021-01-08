const initialState = {
  data: [],
  dataCategoryGrup: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_CATEGORY_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DATA_CATEGORY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'GET_DATA_CATEGORY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.result,
      };
    }
    case 'CATEGORY_BY_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CATEGORY_BY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'action.payload.data.message',
      };
    }
    case 'CATEGORY_BY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataCategoryGrup: action.payload.data.result,
      };
    }
    default: {
      return state;
    }
  }
};
