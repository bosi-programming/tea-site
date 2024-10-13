export function calculateCaffeinePercentage(time: number) {
  if (time === 0) return 0;
  const firstDivision = time / 1.3;
  const firstSubstraction = firstDivision - 665;
  const firstPow = Math.pow(firstSubstraction, 3);
  const secondDivision = firstPow / 3000000;
  const adition = secondDivision + 100;
  return adition / 100;
}
