import styled from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styled.attribution}>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'>
        Frontend Mentor
      </a>
      . Coded by <a href='#'>Your Name Here</a>.
    </div>
  );
};

export default Footer;