function replaceVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      result += '*';
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(replaceVowels("hello world")); // "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // "J*v*scr*pt"

module.exports = replaceVowels;
