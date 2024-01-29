const useDate = (dateProps: string | null) => {
  let resultDate = '';

  if (dateProps) {
    const date = new Date(dateProps);

    const days = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));

    const hours = date.getHours();
    const minutes =
      date.getMinutes().toString().length > 1 ? date.getMinutes() : '0' + date.getMinutes();

    if (days < 1) {
      resultDate = 'Сегодня, ' + hours + ':' + minutes;
    } else if (days > 1 && days < 2) {
      resultDate = 'Вчера, ' + hours + ':' + minutes;
    } else {
      resultDate = days + ' дня назад, ' + hours + ':' + minutes;
    }
  }

  return resultDate;
};

export default useDate;
