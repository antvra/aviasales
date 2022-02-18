/* eslint-disable guard-for-in */
const initialState = {
  allTransfers: true,
  zeroTransfers: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
};

export const transferReducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'CHANGE_FILTER':
      if (action.payload === 'allTransfers') {
        for (const transferKey in state) {
          newState[transferKey] = !state.allTransfers;
        }
        return newState;
      }
      newState = { ...state, [action.payload]: !state[action.payload] };
      return { ...newState, allTransfers: !Object.values(newState).slice(1).includes(false) };
    default:
      return initialState;
  }
};
