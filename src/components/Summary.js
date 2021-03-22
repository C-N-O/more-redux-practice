import React from 'react';
import { useSelector } from 'react-redux';

export const Summary = () => {
  const numApples = useSelector((state) => state.countApple);
  const numMangoes = useSelector((state) => state.countMango);
  const numOranges = useSelector((state) => state.countOrange);
  return (
    <div>
      <h4>We have a total of {numApples + numMangoes + numOranges} fruits.</h4>
      <p>
        <strong>{numApples}</strong> Apples
      </p>
      <p>
        <strong>{numOranges}</strong> Oranges
      </p>
      <p>
        <strong>{numMangoes}</strong> Mangoes
      </p>
    </div>
  );
};

export default Summary;
