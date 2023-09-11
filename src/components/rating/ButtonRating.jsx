import { useEffect, useState } from 'react';
import useRating from '../../contexts/useRating';
import styled from './Rating.module.css';
const ButtonRating = ({ value, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const { rating } = useRating();

  useEffect(() => {
    if (value === rating) setIsActive(true);
    else setIsActive(false);
  }, [value, rating]);

  return (
    <button
      type='button'
      className={`${styled['button']} ${isActive ? styled['active'] : ''}`}
      value={value}
      onClick={onClick}>
      {value}
    </button>
  );
};

export default ButtonRating;
