// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius()", () => {
  describe("input parameter", () => {
    it("should return false if the length of all numbers is odd", () => {
      let input = "421";
      let encode = false;

      let actual = polybius(input, encode);
      let expected = false;

      expect(actual).to.equal(expected);
    });
    it("should return false if the input is not a string", () => {
      let input = 421;
      let encode = true;

      let actual = polybius(input, encode);
      let expected = false;

      expect(actual).to.equal(expected);
    });
    it("should return false if the input is missing", () => {
      let input = "";
      let encode = true;

      let actual = polybius(input, encode);
      let expected = false;

      expect(actual).to.equal(expected);
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      let input = "Thinkful";
      let encode = true;

      let actual = polybius(input, encode);
      let expected = "4432423352125413";

      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      let input = "hello world";
      let encode = true;

      let actual = polybius(input, encode);
      let expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
      let input = "ij";
      let encode = true;

      let actual = polybius(input, encode);
      let expected = "4242";

      expect(actual).to.equal(expected);
    });
  }); 

  describe("decoding a message", () => {
    it("should decode a message by translating each number pairs to letters", () => {
      let input = "4432423352125413";
      let encode = false;

      let actual = polybius(input, encode);
      let expected = "th(i/j)nkful";

      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      let input = "3251131343 2543241341";
      let encode = false;

      let actual = polybius(input, encode);
      let expected = "hello world";

      expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
      let input = "42";
      let encode = false;

      let actual = polybius(input, encode);
      let expected = "(i/j)";

      expect(actual).to.equal(expected);
    });
  });
});
