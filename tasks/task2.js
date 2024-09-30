function reverseWithoutNumbers(str) {
  let result = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(str[i]) || str[i] === ' ') { 
      result += str[i];
    }
  }
  return result;
}

console.log(reverseWithoutNumbers("hello123world456")); // "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));        // "zyxabc"

module.exports = reverseWithoutNumbers;
