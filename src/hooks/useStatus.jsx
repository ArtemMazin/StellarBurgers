import Preloader from '@/components/preloader/preloader';
import React from 'react';

function useStatus(content, status, error) {
  let render;
  if (status === 'loading') {
    render = <Preloader />;
  } else if (status === 'succeeded') {
    render = content;
  } else if (status === 'failed') {
    render = error;
  }
  return render;
}

export default useStatus;
