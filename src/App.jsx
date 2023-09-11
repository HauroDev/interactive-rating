import { useEffect } from 'react';
import Footer from './components/footer/Footer';
import Rating from './components/rating/Rating';
import Success from './components/success/Success';
import useRating from './contexts/useRating';

function App() {
  const { submitRating } = useRating();

  useEffect(() => {
    const container = document.querySelector('#container');

    if (submitRating) {
      container.classList.add('center');
    } else {
      container.classList.remove('center');
    }
  }, [submitRating]);

  return (
    <>
      <main id='container'>{!submitRating ? <Rating /> : <Success />}</main>
      <Footer />
    </>
  );
}

export default App;
