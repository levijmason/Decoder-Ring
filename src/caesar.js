// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, letiables, etc.) within the scope
// of the anonymous function on line 6

// this is the more concise version of the solution, but it has some flaws :/
const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift === 0 || shift > 25) return false;

    let cap = 97;
    if (!encode) {
      shift *= -1;
      cap = 122
    }

    const message = input.toLowerCase();
    return String.fromCharCode(
      ...message
        .split("")
        .map((letterCode) => {
          return /\W/.test(letterCode)
            ? letterCode.charCodeAt(0) 
            : (((letterCode.charCodeAt(0) - cap + shift) % 26) + cap);
        }
    ));
  }
  return {
    caesar,
  };
})();

// this is the first attempt, taking it step by step
// const caesarModule = (function () {
//   function caesar(input, shift, encode = true) {
//     if (!shift || shift < -25 || shift === 0 || shift > 25) return false;
//     if (!encode) {
//       shift *= -1;
//     }
//     let message = "";
//     let lowerCase = input.toLowerCase();
//     for (let i = 0; i < lowerCase.length; i++) {
//       if (shift < 0) {
//         return caesar(lowerCase, shift + 26);
//       }
//       let lettr = lowerCase[i];
//       if (lettr.match(/[a-z]/i)) {
//         let letterCode = lowerCase.charCodeAt(i);
//         if (letterCode >= 97 && letterCode <= 122) {
//           lettr = String.fromCharCode(((letterCode - 97 + shift) % 26) + 97);
//         }
//       }
//       message += lettr;
//     }
//     return message;
//   } 
//   return {
//     caesar,
//   };
// })();

module.exports = caesarModule.caesar;
