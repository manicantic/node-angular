const matchGroupRegex = new RegExp(/([a-zA-Z])\1*/g);
const validationRegex = new RegExp(/^[a-zA-Z]+$/);

/**
 * 
 * @param {string} inputString 
 * @returns {(string|null)} Return encoded string or null if input string is not valid
 */
const encodeString = inputString => {
  const isValid = validationRegex.test(inputString);
  if (!isValid) return null;
  const encodedString = inputString.replace(matchGroupRegex, (match) => (`${match.substring(0, 1)}${match.length}`));
  return encodedString;
}

module.exports = {
  encodeString
};