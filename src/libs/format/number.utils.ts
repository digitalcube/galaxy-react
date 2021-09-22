/**
 * round the number by the specific demical
 * @param value
 * @param demicalPlaceNumber
 */
export const roundingNumber = (
  value: number,
  demicalPlaceNumber = 5
): number => {
  if (demicalPlaceNumber < 0) {
    throw new Error('Invalid number privided. Should use grater than 1');
  }
  if (demicalPlaceNumber === 0) return value;
  const paddValue = demicalPlaceNumber * 10;
  const result = Math.round(value * paddValue) / paddValue;
  return result;
};
