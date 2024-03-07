import React from 'react';
import Banner from '../Banner';

function LostBanner({ answer }) {
  return (
    //if fail after 6
    <Banner status='sad'>
      <p>
        Sorry, the correct answer was <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
