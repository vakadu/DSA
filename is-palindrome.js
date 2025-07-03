function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    while (i < j && !isAlphaNumeric(str[i])) i++;
    while (i < j && !isAlphaNumeric(str[j])) j--;

    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

function isAlphaNumeric(c) {
  return /^[a-z0-9]$/i.test(c);
}
