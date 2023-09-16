function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(isPalindrome("racecar")); // Should return true
console.log(isPalindrome("mom")); // Should return true
console.log(isPalindrome("abba")); // Should return true
console.log(isPalindrome("a")); // Should return true
console.log(isPalindrome("hi")); // Should return false
console.log(isPalindrome("robot")); // Should return false


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
