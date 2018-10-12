// Turn word into an array using .split
// var word =
// Locate if first letter is a vowel - if it's a vowel add 'way' to end of word
var vowel = ["a","e","i","o","u"]


// var word = "Bob"
// function pigLatin(word) {
//   for (i=0; i<word.length, i++)
//     if (word.includes(vowel)) {
//       return true
//     }
//     else return } false
// }
// locate if first letter is a vowel - if not a vowel move the first letter to end of the word and add 'ay'
// If word starts with 'qu', move 'qu' to end of word and add 'ay'

var word = ["B", "o", "b"]


// var word = "Bob"
function pigLatin(word) {
  // create an array of letters from word
  var letters = word.split("")

  // iterate through all letters in word array
  for (i=0; i<word.length; i++) {
  // iterate through vowels in vowel array
    for (a=0; a<vowel.length ; a++) {
  // if any vowels are including in the first index of the word array
      if (vowel.includes(word[0]) === true) {
  // add -way at the end
      return console.log(word +'-way');
  // if word does not have a vowel in the first index, remove the first index and store in a new variable
      } else {
        var c = letters.shift()
      }
  // Take c and make it the new last index, and add ay at the end
          return console.log(letters.splice());
        }
      }
    }


console.log(pigLatin("janice"));
//
// var cob = ["c", "o", "b"]
// var shift = cob.shift();
// console.log(shift);




  // console.log(pigLatin([]));
  //
  // function pigLatin(word) {
  //   var vowel = ["a","e","i","o","u"]
  //   var letters = word.split("")
  //   var newWord = ""
  //   for (i=0; i<vowel.length -1; i++) {
  //     for (a=0; a<letters.length -1; a++)
  //       if (letters[a] === vowel[i]) {
  //       for (b=a; b<word.length -1; b++)
  //     }
  //   }
  // }
  //
  //   console.log(pigLatin("orange"));
