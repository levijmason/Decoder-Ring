const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar()", () => {
  describe("shift parameter", () => {
    it("should return false if shift is less than 25", () => {
      let input = "this is a secret message!";
      let shift = -30;
      let encode = true;

      let actual = caesar(input, shift, encode);
      let expected = false;

      expect(actual).to.equal(expected);
    });
    it("should return false if shift is equal to zero", () => {
      let input = "this is a secret message!";
      let shift = 0;
      let encode = true;

      let actual = caesar(input, shift, encode);
      let expected = false;

      expect(actual).to.equal(expected);
    });
    it("should return false if shift is greater than 25", () => {
      let input = "this is a secret message!";
      let shift = 30;
      let encode = true;

      let actual = caesar(input, shift, encode);
      let expected = false;

      expect(actual).to.equal(expected);
    });
    it("should return false if shift value is not present", () => {
      let input = "this is a secret message!";
      let shift = undefined;
      let encode = true;

      let actual = caesar(input, shift, encode);
      let expected = false;

      expect(actual).to.equal(expected);
    });
  });  
  
  describe("encoding a message", () => {
    it("should encode a message by shifting the letters by the shift values", () => {
      let input = "Thinkful";
      let shift = -3;
      let encode = true; 

      let actual = caesar(input, shift, encode);
      let expected = "qefkhcri";

      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      let input = "This is a secret message!";
      let shift = 8;
      let encode = true;

      let actual = caesar(input, shift, encode);
      let expected = "bpqa qa i amkzmb umaaiom!";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters by the shift values", () => {
      let input = "Wklqnixo";
      let shift = 3;
      let encode = false;

      let actual = caesar(input, shift, encode);
      let expected = "thinkful";

      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      let input = "bpqa qa i amkzmb umaaiom!";
      let shift = 8;
      let encode = false;

      let actual = caesar(input, shift, encode);
      let expected = "this is a secret message!";

      expect(actual).to.equal(expected);
    });
  });
});
