import useRating from '../../contexts/useRating';
import styled from './Success.module.css';
import thankYou from '../../assets/illustration-thank-you.svg';

const Success = () => {
  const { rating } = useRating();
  return (
    <>
      <img
        className={styled['icon-success']}
        src={thankYou}
        alt='thank you for rating'
      />
      <p className={styled['rating']}>You selected {rating} out of 5</p>
      <h2 className={styled['title']}>Thank you!</h2>
      <p className={styled['gratitude']}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
};

export default Success;
