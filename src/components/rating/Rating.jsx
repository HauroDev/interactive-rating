import styled from './Rating.module.css';
import useRating from '../../contexts/useRating';
import starIcon from '../../assets/icon-star.svg';
import ButtonRating from './ButtonRating';

const Rating = () => {
  const rangeRating = [1, 2, 3, 4, 5];
  const { setSubmitRating, setRating, rating } = useRating();

  return (
    <>
      <img
        className={styled['icon-star-rating']}
        src={starIcon}
        alt='start icon orange'
      />
      <h1 className={styled['title']}>How did we do?</h1>
      <p className={styled['description']}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styled['buttons']}>
        {rangeRating.map((value) => (
          <ButtonRating
            key={value}
            value={value}
            onClick={() => setRating(value)}
          />
        ))}
      </div>
      <button
        className={styled['submit-button']}
        onClick={() => {
          if (rating) {
            setSubmitRating(true);
          }
        }}>
        SUBMIT
      </button>
    </>
  );
};

export default Rating;
