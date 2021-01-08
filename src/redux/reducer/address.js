const initialState = {
  dataAddress: [],
  addAddress: [],
  paramsAddress: [],
  changeAddress: [],
  isLoading: false,
  isError: false,
  success: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'GET_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        success: action.payload.data.success,
        dataAddress: action.payload.data.result,
        alertMsg: action.payload.data.message,
      };
    }
    case 'ADD_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADD_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'rejected',
      };
    }
    case 'ADD_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        success: action.payload.data.success,
        addAddress: action.payload.data.data,
        alertMsg: 'fulfilled',
      };
    }
    case 'PARAMS_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'PARAMS_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'PARAMS_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        success: action.payload.data.success,
        paramsAddress: action.payload.data.results,
        alertMsg: action.payload.data.message,
      };
    }

    case 'CHANGE_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CHANGE_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.message,
      };
    }
    case 'CHANGE_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        success: action.payload.data.success,
        changeAddress: action.payload.data.data,
        alertMsg: action.payload.data.message,
      };
    }
    default: {
      return state;
    }
  }
};
