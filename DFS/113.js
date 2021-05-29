/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  var result = [];
  DFS(s, 0, result, []);
  return result;
};

var DFS = (s, start, result, currentArray) => {
  // when reach the end, just add to result
  if (start >= s.length) result.push([...currentArray]);
  for (var end = start; end < s.length; end++) {
    if (isPalindrome(s, start, end)) {
        console.log('is palindrome: ', s.substring(start, end + 1));
      // add current substring in the currentArray
      currentArray.push(s.substring(start, end + 1));
      DFS(s, end + 1, result, currentArray);
      // backtrack and remove the current substring from currentArray
      console.log('pop: ', currentArray.pop());
      //   currentArray.pop();
    } else {
      console.log('not palindrome: ', s.substring(start, end + 1));
    }
  }
};

var isPalindrome = (s, head, tail) => {
  while (head < tail) {
    if (s.charAt(head++) !== s.charAt(tail--)) {
      return false;
    }
  }
  return true;
};

console.log(partition('aaba'));
// console.log(isPalindrome('aabaa'));
