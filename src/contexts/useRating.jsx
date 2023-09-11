import { useContext } from 'react';
import { RatingContext } from './rating';

const useRating = () => useContext(RatingContext);

export default useRating;
