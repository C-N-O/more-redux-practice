import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementOranges, decrementOranges } from '../actions';

const Oranges = () => {
  // const numOranges = useSelector((state) => state.countOrange);
  const dispatch = useDispatch();

  return (
    <div className='comp'>
      {/* <h3>Oranges</h3>
      <p>Our Orange basket contains {numOranges} Oranges.</p> */}
      <button onClick={() => dispatch(decrementOranges())}>-</button>
      Oranges
      <button onClick={() => dispatch(incrementOranges())}>+</button>
    </div>
  );
};

export default Oranges;
