export const loadState = () => {
  try {
    const savedState = localStorage.getItem('state');
    if (savedState === null) {
      return undefined;
    }

    return JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const stateToBeSaved = JSON.stringify(state);

    localStorage.setItem('state', stateToBeSaved);
  } catch (error) {
    console.error(error);
  }
};
