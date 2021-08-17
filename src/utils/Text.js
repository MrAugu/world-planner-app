export const randomString = (length) => {
  const charset = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
  const alphaNumericString = [];
  for (let i = 0; i < length; i++) alphaNumericString.push(charset[Math.random() * charset.length]);
  return alphaNumericString.join(""); 
};
