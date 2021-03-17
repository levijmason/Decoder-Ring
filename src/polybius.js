// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    if (!input || typeof input == "number") return false;
    let inputSpace = input.split(" ").join("##");
    if (encode === false && inputSpace.length % 2 !== 0) return false;

    let message = "";

    if (encode) {
      let lowerCase = input.toLowerCase();
      let toNumb = "";
      for (let char of lowerCase) {
        switch (char) {
          case " ":
            toNumb = " ";
            break;
          case "a":
            toNumb = "11";
            break;
          case "b":
            toNumb = "21";
            break;
          case "c":
            toNumb = "31";
            break;
          case "d":
            toNumb = "41";
            break;
          case "e":
            toNumb = "51";
            break;
          case "f":
            toNumb = "12";
            break;
          case "g":
            toNumb = "22";
            break;
          case "h":
            toNumb = "32";
            break;
          case "i":
            toNumb = "42";
            break;
          case "j":
            toNumb = "42";
            break;
          case "k":
            toNumb = "52";
            break;
          case "l":
            toNumb = "13";
            break;
          case "m":
            toNumb = "23";
            break;
          case "n":
            toNumb = "33";
            break;
          case "o":
            toNumb = "43";
            break;
          case "p":
            toNumb = "53";
            break;
          case "q":
            toNumb = "14";
            break;
          case "r":
            toNumb = "24";
            break;
          case "s":
            toNumb = "34";
            break;
          case "t":
            toNumb = "44";
            break;
          case "u":
            toNumb = "54";
            break;
          case "v":
            toNumb = "15";
            break;
          case "w":
            toNumb = "25";
            break;
          case "x":
            toNumb = "35";
            break;
          case "y":
            toNumb = "45";
            break;
          case "z":
            toNumb = "55";
            break;
        }
        message += toNumb;
      }
    } else {
      let toLett = "";
      for (let i = 0; i < inputSpace.length; i += 2) {
        let numb = inputSpace.substring(i, i + 2);
        switch (numb) {
          case "##":
            toLett = " ";
            break;
          case "11":
            toLett = "a";
            break;
          case "21":
            toLett = "b";
            break;
          case "31":
            toLett = "c";
            break;
          case "41":
            toLett = "d";
            break;
          case "51":
            toLett = "e";
            break;
          case "12":
            toLett = "f";
            break;
          case "22":
            toLett = "g";
            break;
          case "32":
            toLett = "h";
            break;
          case "42":
            toLett = "(i/j)";
            break;
          case "52":
            toLett = "k";
            break;
          case "13":
            toLett = "l";
            break;
          case "23":
            toLett = "m";
            break;
          case "33":
            toLett = "n";
            break;
          case "43":
            toLett = "o";
            break;
          case "53":
            toLett = "p";
            break;
          case "14":
            toLett = "q";
            break;
          case "24":
            toLett = "r";
            break;
          case "34":
            toLett = "s";
            break;
          case "44":
            toLett = "t";
            break;
          case "54":
            toLett = "u";
            break;
          case "15":
            toLett = "v";
            break;
          case "25":
            toLett = "w";
            break;
          case "35":
            toLett = "x";
            break;
          case "45":
            toLett = "y";
            break;
          case "55":
            toLett = "z";
            break;
        }
        message += toLett; 
      }
    }
    return message;
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
