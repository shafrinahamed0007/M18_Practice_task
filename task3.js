/**
 * Write a function to count the number of vowels in a string.
 */

function countVowels(sentence) {
  let sentenceLower = sentence.toLowerCase();
  let sentenceSplit = sentenceLower.split("");
  // console.log(sentenceSplit);

  let vowels = [];

  for (sentences of sentenceSplit) {
    if (
      sentences == "a" ||
      sentences == "e" ||
      sentences == "i" ||
      sentences == "o" ||
      sentences == "u"
    ) {
      vowels.push(sentences);
    }
  }
  let countVowels = vowels.length;
  return (
    sentence + " - this sentence has total" + " " + countVowels + " " + "vowels"
  );
}

let sentence = "Hello! My Name is Shafrin Ahamed";

let count = countVowels(sentence);
console.log(count);
