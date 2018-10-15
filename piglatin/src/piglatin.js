import React, { Component } from 'react';
import App from './App';

class Piglatin extends Component {
  constructor(props) {
    super(props)
  }
render() {
var vowel = ["a","e","i","o","u"];
var word = [];

function pigLatin(word) {

  var letters = word.split("");

  // iterate through all letters in word array
  for (i=0; i<word.length; i++) {
  // iterate through vowels in vowel array
    for (a=0; a<vowel.length ; a++) {
  // if any vowels are including in the first index of the word array
      if (vowel.includes(word[0]) === true) {
    // add -way at the end
        return console.log(word +'-way');
    // if word does not have a vowel in the first index, remove the first index and store in a new variable
      } else if (letters.indexOf(0) === 'q' && letters.indexOf(1) === 'u') {
        var removeQu = letters.splice(0, 2);
        return console.log(removeQu);
      } else {
        var c = letters.shift()
        var letters1 = letters.join('')
        return console.log(letters1 +  c + "ay");
      }
    }
    }

  }
}
// console.log(pigLatin("quill"));
}

export default Piglatin;
