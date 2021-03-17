// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    for (letter of alphabet) {
      if (alphabet.indexOf(letter) !== alphabet.lastIndexOf(letter)) {
        return false;
      }
    }

    let ogABC = "abcdefghijklmnopqrstuvwxyz ";
    let subABC = alphabet + " ";
    let lowerCase = input.toLowerCase();

    let message = "";

    for (let i = 0; i < lowerCase.length; i++) {
      if (encode) {
        message += subABC[ogABC.indexOf(lowerCase[i])];
      } else {
        message += ogABC[subABC.indexOf(lowerCase[i])];
      }
    }
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
