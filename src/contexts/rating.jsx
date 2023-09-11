import { createContext, useState } from 'react';

export const RatingContext = createContext({
  rating: 0,
  setRating: () => {},
  submitRating: false,
  setSubmitRating: () => {}
});

const RatingProvider = ({ children }) => {
  const [rating, setRating] = useState(0);
  const [submitRating, setSubmitRating] = useState(false);
  return (
    <RatingContext.Provider
      value={{ rating, setRating, submitRating, setSubmitRating }}>
      {children}
    </RatingContext.Provider>
  );
};

export default RatingProvider;
