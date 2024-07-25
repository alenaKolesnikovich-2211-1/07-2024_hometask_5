import { nameIsValid, fullTrim, getTotal } from '../src/app'
describe('nameIsValid function', () => {
  it('nameIsValid function imports properly', () => {
    expect(nameIsValid).toBeDefined();
    expect(typeof nameIsValid).toBe('function');
  });
  it(`checks when name includes 2 chars, e.g "ab", passes`, () => {
    expect(nameIsValid("ab")).toBe(true);
  });
  it(`checks when name includes 3 chars, e.g "abc", passes`, () => {
    expect(nameIsValid("abc")).toBe(true);
  });
  it(`checks when name contains 26 different chars, passes`, () => {
    const inputValue = "abcdefghijklmnopqrstuvwxyz";
    expect(nameIsValid(inputValue)).toBe(true);
  });
  it(`checks when name contains dublicate chars, e.g "abcabcabc", passes`, () => {
    expect(nameIsValid("abcabcabc")).toBe(true);
  });
  const str = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  const strLength = str.length;
  it(`checks when valid name includes only chars and its length is ${strLength}, passes`, () => {
    const inputValue = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    expect(nameIsValid(inputValue)).toBe(true);
  });
  it(`checks when name is "true", passes`, () => {
    expect(nameIsValid("true")).toBe(true);
  });
  it('checks when name is undefined, fails', () => {
    expect(nameIsValid()).toBe(false);
  });
  it('checks when name is an empty string, fails', () => {
    expect(nameIsValid('')).toBe(false);
  });
  it(`checks when name includes 1 char, fails`, () => {
    expect(nameIsValid("a")).toBe(false);
  });
  it(`checks when name includes chars and digit (e.g. "ab1"), fails`, () => {
    expect(nameIsValid("ab1")).toBe(false);
  });
  it(`checks when name is Number, fails`, () => {
    expect(nameIsValid(111)).toBe(false);
  });
  it(`checks when name is Boolean, fails`, () => {
    expect(nameIsValid(false)).toBe(false);
  });
  it(`checks when name includes chars with a special symbol (e.g "qw@"), fails`, () => {
    expect(nameIsValid("qw@")).toBe(false);
  });
  it(`checks when name includes only special symbols (e.g "!@#"), fails`, () => {
    expect(nameIsValid("!@#")).toBe(false);
  });
  it(`checks when name includes russian chars (e.g "сумма"), fails`, () => {
    expect(nameIsValid("сумма")).toBe(false);
  });
  it(`checks when name includes a combination of English and Russian chars (e.g "sosмч"), fails`, () => {
    expect(nameIsValid("sosмч")).toBe(false);
  });
  it(`checks when name includes whitespace (e.g "sos sos"), fails`, () => {
    expect(nameIsValid("sos sos")).toBe(false);
  });
  it(`checks when name includes underscores (e.g "a_b"), fails`, () => {
    expect(nameIsValid("a_b")).toBe(false);
  });
  it(`checks when name includes lower and upper case chars (e.g "aBc"), fails`, () => {
    expect(nameIsValid("aBc")).toBe(false);
  });
});

describe('fullTrim function', () => {
  it('fullTrim function imports properly', () => {
    expect(fullTrim).toBeDefined();
    expect(typeof fullTrim).toBe('function');
  });


  // export const fullTrim = (text) => (text || "").replace(/\s/g, "");
});

describe('getTotal function', () => {
  it('getTotal function imports properly', () => {
    expect(getTotal).toBeDefined();
    expect(typeof getTotal).toBe('function');
  });
});
