export const getRandomInteger = (min: number, max: number): number => {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(random);
};
