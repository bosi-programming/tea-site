export const timerText = (time: number) => {
  const date = new Date(1000 * time);
  return date.toISOString().substring(14, 19);
};
