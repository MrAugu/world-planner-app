export const encodeTimestamp = (timestamp) => Math.trunc(
  String(
    timestamp - Math.trunc(timestamp / 10 ** 12) * 10 ** 12
  )
  .split("")
  .map(digit => Number(digit))
  .map(num => Math.trunc(num * Math.PI))
  .reduce((acc, ite) => acc + ite) / Math.PI
);
