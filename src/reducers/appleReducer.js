const appleCounter = (state = 50, action) => {
  switch (action.type) {
    case 'INCREMENT_APPLES':
      return state + 1;
    case 'DECREMENT_APPLES':
      return state - 1;
    default:
      return state;
  }
};

export default appleCounter;
