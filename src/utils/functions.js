export const filterMovies = (arr, searchText = '', isShort = false) => {
  let tempMovies = [...arr].filter(
    (item) =>
      item.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
      item.nameEN.toLowerCase().includes(searchText.toLowerCase())
  );
  if (isShort) {
    tempMovies = [...tempMovies].filter((item) => item.duration < 40);
  }
  return tempMovies;
};

export const validateForm = (name, email) => {
  if (!name && !email) return 'Заполните все поля!';

  if (!name) return 'Требуется заполнить поле имя!';
  if (!email) return 'Требуется заполнить поле E-mail!';

  const regex = /^[a-zA-Zа-яА-Я\s\-]+$/;

  if (!regex.test(name)) return 'Некорректное имя!';

  if (name.length < 2 || name.length > 30)
    return 'Имя должно быть длиной от 2 до 30 символов!';
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) return 'Некорректная почта!';

  return '';
};
