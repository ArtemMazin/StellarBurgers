function useStatus(loading, content, status, error) {
  let render;
  if (status === 'loading') {
    render = loading;
  } else if (status === 'succeeded') {
    render = content;
  } else if (status === 'failed') {
    render = error;
  }
  return render;
}

export default useStatus;
