import React, { Component } from 'react';
import App from './App';

class Piglatin extends Component {
  constructor(props) {
    super(props)
  }

 pigLatin(word) {
    var vowel = ["a","e","i","o","u"];
    //var word = [];
    var letters = word.split("");

    // iterate through all letters in word array
    for (let i=0; i<word.length; i++) {
    // iterate through vowels in vowel array
      for (let a=0; a<vowel.length ; a++) {
    // if any vowels are including in the first index of the word array
        if (vowel.includes(word[0]) === true) {
      // add -way at the end
          // console.log(word +'-way');
          return (word +'-way');
      // if word does not have a vowel in the first index, remove the first index and store in a new variable
    } else if (letters[0] === 'q' && letters[1] === 'u') {
          var removeQu = letters.splice(0, 2)
          // console.log('qu stuff', removeQu);
          return (letters.join("") + 'quay')
        } else {
          var c = letters.shift()
          var letters1 = letters.join('')
          // console.log(letters1 +  c + "ay");
          return (letters1 +  c + "ay");
        }
      }
      }
    }

render() {

  return(
  <p>Pig Latin: {this.pigLatin(this.props.greeting)   }</p>
  )
}

// console.log(pigLatin("quill"));
}

export default Piglatin;
