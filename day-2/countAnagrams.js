// Given a word and a text, return the count of occurrences of anagrams
// of the word in the text.

function countAnagrams(word, text) {
  // your code here
  let count=0;

  for (let index = 0; index <= text.length; index++) {    
    if(index >= word.length) {
        const sliceStr = text.slice(index-word.length, index);
        if(checkAnagram(word, sliceStr)) {
            count++
        }        
    }
  }

  return count
}

function checkAnagram(original, str) {
    let map = new Map();

    for (const element of original) {
        map.set(element, map.get(element)+1 || 1)
    }

    for (const element of str) {
        map.set(element, map.get(element)-1);

        if(map.get(element) <= 0){
            map.delete(element)
        }
    }

    return map.size === 0
}

// Example:
console.log(countAnagrams("for", "forxxorfxdofr")); // Output: 3
// "for", "orf", "ofr"


// function countAnagrams(word, text) {
//   const k = word.length;
//   if (text.length < k) return 0;

//   const target = new Map();
//   const window = new Map();
//   let count = 0;

//   // Build target map
//   for (const c of word) {
//     target.set(c, (target.get(c) || 0) + 1);
//   }

//   // Build first window
//   for (let i = 0; i < k; i++) {
//     const c = text[i];
//     window.set(c, (window.get(c) || 0) + 1);
//   }

//   if (isSame(window, target)) count++;

//   // Slide the window
//   for (let i = k; i < text.length; i++) {
//     const newChar = text[i];
//     const oldChar = text[i - k];

//     // Add new char
//     window.set(newChar, (window.get(newChar) || 0) + 1);

//     // Remove old char
//     window.set(oldChar, window.get(oldChar) - 1);
//     if (window.get(oldChar) === 0) window.delete(oldChar);

//     if (isSame(window, target)) count++;
//   }

//   return count;
// }

// function isSame(map1, map2) {
//   if (map1.size !== map2.size) return false;
//   for (let [key, val] of map1) {
//     if (map2.get(key) !== val) return false;
//   }
//   return true;
// }
