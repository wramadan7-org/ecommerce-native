const initialState = {
   isLoading: false,
   isError: false,
   alertMsg: '',
   data: [],
 };

 export default (state = initialState, action) => {
   switch (action.type) {
     case 'GET_DETAIL_PRODUCT_PENDING': {
       return {
         ...state,
         isLoading: true,
       };
     }
     case 'GET_DETAIL_PRODUCT_REJECTED': {
       return {
         ...state,
         isLoading: false,
         isError: true,
         alertMsg: 'Request rejected',
       };
     }
     case 'GET_DETAIL_PRODUCT_FULFILLED': {
       return {
         ...state,
         isLoading: false,
         isError: false,
         alertMsg: 'Detail data',
         data: action.payload.data.data,
         status: action.payload.data.success,
       };
     }
     default: {
       return state;
     }
   }
 };

