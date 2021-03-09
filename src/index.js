module.exports = function reverse (n) {
  let reverseValue = n.toString().split("").reverse().join("");
  return parseInt(reverseValue);
}
