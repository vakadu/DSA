function isPalindrome(s) {
  let i = 0,
    j = s.length - 1;

  while (i <= j) {
    while (i < j && !isAlphaNumeric(s[i])) i++;
    while (i < j && !isAlphaNumeric(s[j])) j--;

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// true

console.log(isPalindrome("race a car"));
// false

console.log(isPalindrome(" "));
// true
