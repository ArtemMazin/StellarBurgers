import React from 'react';

type TStatusProps = {
  loading: React.ReactElement;
  content: React.ReactElement;
  status: string;
};

function useStatus({ loading, content, status }: TStatusProps) {
  let render;
  if (status === 'idle') {
    render = content;
  } else if (status === 'loading') {
    render = loading;
  } else if (status === 'succeeded') {
    render = content;
  } else if (status === 'failed') {
    render = content;
  }
  return render;
}

export default useStatus;
