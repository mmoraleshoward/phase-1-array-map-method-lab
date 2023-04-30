const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map ((firstLetter) => {
     const firstLetters = firstLetter.split(' ').map((letter) => {
      return letter.replace(letter.charAt(0), letter.charAt(0).toUpperCase()).toString();
      });
      return firstLetters.join(" ");
    });
  };


/**const titleCased = () => {
  return tutorials.map((tutorial) => {
    const words = tutorial.split(' ').map((word) => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase()).toString();
    });
    return words.join(" ");
  });

}**/


