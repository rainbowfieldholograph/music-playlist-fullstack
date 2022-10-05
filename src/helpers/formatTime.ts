const formatNum = (num: number) => (num < 10 ? `0${num}` : `${num}`);

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${formatNum(minutes)}:${formatNum(secs)}`;
};
