export const formatDate = (date: string): string | null => {
  const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  const regExpMatchDate = date.match(regex);
  if (regExpMatchDate === null) {
    return null;
  }

  const [formatDate] = regExpMatchDate;

  const [year, month, day] = formatDate.split('-');

  return `${year}년 ${month}월 ${day}일`;
};
