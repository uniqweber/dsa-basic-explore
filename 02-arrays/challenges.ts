/* ----------------------------- reverse string ----------------------------- */

const reverseString = (str: string): string => {
  let rev: string[] = [];
  for (let i = str.length - 1; i >= 0; i--) {
    rev.push(str[i]);
  }
  return rev.join("");
};

const shortCodeReverseString = (str: string): string => str.split("").reverse().join("");

// console.log(shortCodeReverseString("Apple"));    // output: elppA
// console.log(reverseString("hello"));             // output: olleh

/* ---------------------------- palindrome check ---------------------------- */

const palindromeCheck = (str: string) => {
  let palindromeStr: string[] = [];
  for (let i = str.length - 1; i >= 0; i--) {
    palindromeStr.push(str[i]);
  }
  return palindromeStr.join("") == str;
};

const shortCodePalindromeCheck = (str: string) => str.split("").reverse().join("") == str;

// console.log(palindromeCheck("madam"));           // Output: true
// console.log(palindromeCheck("hello"));           // Output: false
// console.log(shortCodePalindromeCheck("dad"));    // Output: true

/* ---------------------------- integer reversal ---------------------------- */

const reverseIntegers = (digits: number) => {
  let rev: string[] = [];
  let strDigit = digits.toString();
  for (let i = strDigit.length - 1; i >= 0; i--) {
    rev.push(strDigit[i]);
  }
  return Number(rev.join(""));
};

const shortCodeReverseIntegers = (digits: number) => Number(digits.toString().split("").reverse().join(""));

// console.log(reverseIntegers(12345));             // Output: 54321
// console.log(shortCodeReverseIntegers(123));      // Output: 321

/* ------------------------- sentence capitalization ------------------------ */

const sentenceCapitalization = (sentence: string) => {
  let result = sentence.charAt(0).toUpperCase();
  for (let i = 1; i < sentence.length; i++) {
    result += sentence[i];
  }
  return result;
};

const shortCodeSentenceCapitalization = (sentence: string): string => sentence.charAt(0).toUpperCase() + sentence.slice(1);

// console.log(sentenceCapitalization("hello, how are you"));           // Output: Hello, how are you
// console.log(shortCodeSentenceCapitalization("hello, how are you"));  // Output: Hello, how are you
