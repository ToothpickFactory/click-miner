const initialState = {
  test: 0
}

export function GameReducer(state = initialState, action) {
  switch (action.type) {
    case 'COLLECT':
      state.test += 1;
      return state;
    default:
      return state;
  }
}
