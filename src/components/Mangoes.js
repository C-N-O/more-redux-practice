import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementMangoes, decrementMangoes } from '../actions';

const Mangoes = () => {
  // const numMangoes = useSelector((state) => state.countMango);
  const dispatch = useDispatch();
  return (
    <div className='comp'>
      {/* <h3>Mangoes</h3>
      <p>Our Mango basket contains {numMangoes} Mangoes.</p> */}
      <button onClick={() => dispatch(decrementMangoes())}>-</button>
      Mangoes
      <button onClick={() => dispatch(incrementMangoes())}>+</button>
    </div>
  );
};

export default Mangoes;
