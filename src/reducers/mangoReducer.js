const mangoCounter = (state = 80, action) => {
  switch (action.type) {
    case 'INCREMENT_MANGOES':
      return state + 1;
    case 'DECREMENT_MANGOES':
      return state - 1;
    default:
      return state;
  }
};

export default mangoCounter;
