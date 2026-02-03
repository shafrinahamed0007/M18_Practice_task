/**
 * Write a function to find the longest word in a given string.
 *
 * sample-input: I am learning Programming to become a programmer
 *
 * sample-output: Programming
 */

function findLongestWord(sentence) {
  let splitSentence = sentence.split(" ");

  let findLong = "";

  for (sentence of splitSentence) {
    if (sentence.length > findLong.length) {
      findLong = sentence;
    }
  }

  return findLong;
}

let sentence = "I am learning Programming to become a programmer";
let findLongest = findLongestWord(sentence);
console.log(findLongest);
