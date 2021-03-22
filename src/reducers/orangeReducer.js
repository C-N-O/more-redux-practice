const orangeCounter = (state = 30, action) => {
  switch (action.type) {
    case 'INCREMENT_ORANGES':
      return state + 1;
    case 'DECREMENT_ORANGES':
      return state - 1;
    default:
      return state;
  }
};

export default orangeCounter;
