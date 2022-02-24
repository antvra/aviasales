const initialState = {
  allTransfers: true,
  zeroTransfers: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
};

export const transferReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...action.payload };
    default:
      return state;
  }
};
