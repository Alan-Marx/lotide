
const countLetters = function(string) {
  const letterCount = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
}

module.exports = countLetters;

// const exampleString = "Howdy there partner";

// let cowboy = countLetters(exampleString);

// assertEqual(cowboy['H'], 1);
// assertEqual(cowboy['e'], 3);
// assertEqual(cowboy['z'], undefined);
// assertEqual(cowboy.p, 1);