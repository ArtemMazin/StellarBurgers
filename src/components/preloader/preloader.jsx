import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#4c4cff',
};

function Preloader() {
  return (
    <ClipLoader
      color="#4c4cff"
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Preloader;
