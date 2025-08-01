// Given a string s, return true if the string can be made a palindrome
// after deleting at most one character.

function validPalindrome(s) {
  // your code here
  let i=0, j=s.length-1;

  while(i<j) {
    if(s[i] === s[j]) {
        i++;
        j--
    } else {
        return isPalindrome(s, i+1, j) || isPalindrome(s, i, j-1)
    }
  }
}

function isPalindrome(s, i, j) {
    while(i<j) {
    if(s[i] !== s[j]) {
        return false
    } else {
        i++;
        j--
    }
  }

  return true
}

// Example:
console.log(validPalindrome("deeee")); // Output: true
// Remove 'b' or 'c'
