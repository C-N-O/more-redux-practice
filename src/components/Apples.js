import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; //a pair of custom React hooks that allow your React components to interact with the Redux store.
import { incrementApples, decrementApples } from '../actions';

const Apples = () => {
  // const numApples = useSelector((state) => state.countApple);
  const dispatch = useDispatch();

  return (
    <div className='comp'>
      {/* <h3>Apples</h3>
      <p>Our Apple basket contains {numApples} Apples.</p> */}
      <button onClick={() => dispatch(decrementApples())}>-</button>
      Apples
      <button onClick={() => dispatch(incrementApples())}>+</button>
    </div>
  );
};

export default Apples;
