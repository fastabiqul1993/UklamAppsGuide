const init = {
  packageList: [],
  packageById: {},
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const packageCmd = (state = init, action) => {
  switch (action.type) {
    // Get All Package...
    case 'GET_ALL_PACKAGE_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_ALL_PACKAGE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false,
      };
    case 'GET_ALL_PACKAGE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        packageList: action.payload.data.response,
      };
    // Get Package...
    case 'GET_PACKAGE_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_PACKAGE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false,
      };
    case 'GET_PACKAGE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        packageById: action.payload.data.response,
      };
    // Post Package...
    case 'POST_PACKAGE_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_PACKAGE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false,
      };
    case 'POST_PACKAGE_FULFILLED':
      state.packageList.push(action.payload.data.response);
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
      };
    // Patch Package...
    case 'PATCH_PACKAGE_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PATCH_PACKAGE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false,
      };
    case 'PATCH_PACKAGE_FULFILLED':
      const dataAfterEdit = state.packageList.map(item => {
        if (item._id === action.payload.data.response._id) {
          return action.payload.data.response;
        } else {
          return item;
        }
      });

      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        packageList: dataAfterEdit,
      };
    // Delete Package...
    case 'DELETE_PACKAGE_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'DELETE_PACKAGE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false,
      };
    case 'DELETE_PACKAGE_FULFILLED':
      const dataAfterDelete = state.packageList.filter(
        item => item._id !== action.payload.data.response._id,
      );
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        packageList: dataAfterDelete,
      };

    default:
      return state;
  }
};

export default packageCmd;
