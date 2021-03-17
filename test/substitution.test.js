const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution()", () => {
    describe("alphabet parameter", () => {
        it("should return false if the substitution alphabet is missing", () => {
            let input = 'yep it is an input sure is';
            let alphabet = '';
            let encode  = false;
            
            let actual = substitution(input, alphabet, encode);
            let expected = false;
            
            expect(actual).to.equal(expected);
        });
        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            let input = 'yep it is an input sure is';
            let alphabet = 'abcdefghijklmnop';
            let encode  = false;
            
            let actual = substitution(input, alphabet, encode);
            let expected = false;
            
            expect(actual).to.equal(expected);
        });
        it("should return false if the substitution alphabet does not contain unique characters", () => {
            let input = 'yep it is an input sure is';
            let alphabet = 'abcdeeeeeeeeeeeeee';
            let encode  = false;
            
            let actual = substitution(input, alphabet, encode);
            let expected = false;
            
            expect(actual).to.equal(expected);
        }); 
    });
    describe("encoding a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            let input = "thinkful";
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let encode  = true;
            
            let actual = substitution(input, alphabet, encode);
            let expected = 'jrufscpw';
            
            expect(actual).to.equal(expected);
        });
        it("should work with any kind of key with unique characters", () => {
            let input = "thinkful";
            let alphabet = "xoyqm.grukswaflnthdjpzibev";
            let encode  = true;
            
            let actual = substitution(input, alphabet, encode);
            let expected = 'jrufs.pw';
            
            expect(actual).to.equal(expected);
        });
        it("should preserve spaces", () => {
            let input = "you are an excellent spy";
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let encode  = true;
            
            let actual = substitution(input, alphabet, encode);
            let expected = 'elp xhm xf mbymwwmfj dne';
            
            expect(actual).to.equal(expected);
        }); 
    });
    describe("decoding a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            let input = 'jrufscpw';
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let encode  = false;
            
            let actual = substitution(input, alphabet, encode);
            let expected = "thinkful";
            
            expect(actual).to.equal(expected);
        });
        it("should work with any kind of key with unique characters", () => {
            let input = 'jrufs.pw';
            let alphabet = "xoyqm.grukswaflnthdjpzibev";
            let encode  = false;
            
            let actual = substitution(input, alphabet, encode);
            let expected = "thinkful";
            
            expect(actual).to.equal(expected);
        });
        it("should preserve spaces", () => {
            let input = 'elp xhm xf mbymwwmfj dne';
            let alphabet = 'xoyqmcgrukswaflnthdjpzibev';
            let encode  = false;
            
            let actual = substitution(input, alphabet, encode);
            let expected = "you are an excellent spy";
            
            expect(actual).to.equal(expected);
        }); 
    });
});